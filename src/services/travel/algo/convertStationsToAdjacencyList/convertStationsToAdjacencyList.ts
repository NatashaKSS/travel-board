import { StationsJson } from 'data/stations/types/stations.types';
import {
  MapOfStationPositionPerLine,
  MapOfFinalStationPerLine,
  AdjacentStations,
} from './convertStationsToAdjacencyList.types';

/**
 * This module is responsible for converting the entire stations data payload
 * into a computable format - adjacency list for easier graph searching.
 *
 * Example:
 * Converts
 * {
 *   "Marina South": { "TE": 21 },
 *   "Gardens by the Bay": { "TE": 22 }
 * }
 * Into
 * {
 *   "Marina South": ["Gardens by the Bay"],
 *   "Gardens by the Bay": ["Marina South"]
 * }
 */

const MIN_POSITION = 0;

/**
 * Searches all stations to obtain the dictionary mapping of each line's (e.g. "EW", "NS")
 * station object, according to their station positions.
 *
 * @param {StationsJson} stations  All stations and their corresponding lines and positions
 * @returns {MapOfStationPositionPerLine}  Map of all lines and positions to stations
 */
const getMapOfStationPositionPerLine = (stations: StationsJson): MapOfStationPositionPerLine => {
  let stationPositionPerLine: MapOfStationPositionPerLine = {};

  for (const [stationName, mapOfLines] of Object.entries(stations)) {
    for (const [line, position] of Object.entries(mapOfLines)) {
      if (!stationPositionPerLine.hasOwnProperty(line)) {
        stationPositionPerLine[line] = {};
      }

      const id = `${stationName}${line}`;
      if (Array.isArray(position)) {
        position.forEach((p) => {
          stationPositionPerLine[line][p] = {
            id,
            name: stationName,
            line,
            position: p,
          };
        });
      } else {
        stationPositionPerLine[line][position] = {
          id,
          name: stationName,
          line,
          position: position,
        };
      }
    }
  }

  return stationPositionPerLine;
};

/**
 * Searches all stations to obtain the dictionary mapping of each line's (e.g. "EW", "NS")
 * final station position.
 *
 * @param {StationsJson} stations  All stations and their corresponding lines and positions
 * @returns {MapOfFinalStationPerLine} Map of each line to position of their final stations
 */
const getMapOfFinalStationPerLine = (stations: StationsJson): MapOfFinalStationPerLine => {
  let finalStationPerLine: MapOfFinalStationPerLine = {};

  for (const [, mapOfLines] of Object.entries(stations)) {
    for (const [line, possiblePositions] of Object.entries(mapOfLines)) {
      if (!finalStationPerLine.hasOwnProperty(line)) {
        finalStationPerLine[line] = 0;
      }

      if (Array.isArray(possiblePositions)) {
        possiblePositions.forEach((pos) => {
          finalStationPerLine[line] = Math.max(finalStationPerLine[line], pos);
        });
      } else {
        finalStationPerLine[line] = Math.max(finalStationPerLine[line], possiblePositions);
      }
    }
  }

  return finalStationPerLine;
};

/**
 * Finds and adds all adjacent stations for this.
 *
 * Post-effect:
 *   - Modifies the mapping passed in and adds any adjacent nodes found from this current station
 *
 * @param {AdjacentStations} result  Mapping of adjacent stations we have currently
 * @param {MapOfStationPositionPerLine} stationPositionMap  Map of all lines and positions to station names
 * @param {number} pos  Current station position for which we want to find adjacents for
 * @param {string} stationName  Name of the current station position
 * @param {string} line  Line name of the current station
 * @param {number} finalStationPosition  Station position of the final station in the line
 */
const addAdjacentStation = (
  result: AdjacentStations,
  stationPositionMap: MapOfStationPositionPerLine,
  pos: number,
  stationName: string,
  line: string,
  finalStationPosition: number
) => {
  if (pos >= MIN_POSITION) {
    // --- Handling stations before
    let beforeStationPosition = pos - 1;
    while (beforeStationPosition >= MIN_POSITION) {
      // because the station could maybe not exist yet, so keep looking behind

      if (stationPositionMap[line][beforeStationPosition]) {
        result[stationName].push(stationPositionMap[line][beforeStationPosition]); // to obtain the next best before station
        break;
      }

      beforeStationPosition--;
    }

    // --- Handling stations after
    let afterStationPosition = pos + 1;
    while (afterStationPosition <= finalStationPosition) {
      // because the station could maybe not exist yet, so keep looking ahead
      if (stationPositionMap[line][afterStationPosition]) {
        result[stationName].push(stationPositionMap[line][afterStationPosition]); // to obtain the next best after station
        break;
      }
      afterStationPosition++;
    }
  }
};

/**
 * Transforms the mapping of all stations to an adjcency list.
 *
 * Example:
 * {
 *   "Marsiling": [{ "NS": 7 }, { "NS": 9 }]
 * }
 *
 * @param {StationsJson} stations  All stations and their corresponding lines and positions
 * @returns {AdjacentStations}  Adjacency list representation of all stations.
 */
const convertStationsToAdjacencyList = (stations: StationsJson): AdjacentStations => {
  try {
    if (stations) {
      // --- Get last position of each line, to compute the adjacents later
      const finalStationMap = getMapOfFinalStationPerLine(stations);

      // --- Get position of each station, for each line, to help to compute the adjacents later
      const stationPositionMap = getMapOfStationPositionPerLine(stations);

      // --- Map out adjacent stations
      let result: AdjacentStations = {};
      for (const [stationName, mapOfLines] of Object.entries(stations)) {
        if (!result.hasOwnProperty(stationName)) {
          result[stationName] = [];
        }

        for (const [line, pos] of Object.entries(mapOfLines)) {
          const finalPosition = finalStationMap[line];

          if (Array.isArray(pos)) {
            // station is connected by a cycle, so multiple possible positions
            pos.forEach((p) => {
              addAdjacentStation(result, stationPositionMap, p, stationName, line, finalPosition);
            });
          } else {
            // station is standalone, single, so only 1 possible position
            addAdjacentStation(result, stationPositionMap, pos, stationName, line, finalPosition);
          }
        }
      }
      return result;
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};

export { convertStationsToAdjacencyList };
