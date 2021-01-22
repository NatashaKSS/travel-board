import { Station } from '../../models/stations.types';
import { StationsJson } from 'data/stations/types/stations.types';
import { getStation } from 'services/travel/models/stations';

/**
 * Obtains the line of the 'from' station, in the direction of the route.
 *
 * @param {string} start  Name of starting station
 * @param {string} end  Name of end station
 * @returns {string}  Name of the starting station's line
 */
const findNextLine = (linesFrom: string[], linesTo: string[]) => {
  if (linesFrom.length === 1) {
    return linesFrom[0];
  } else {
    const intersection = linesTo.filter((line) => linesFrom.includes(line));

    // there should only ever be 1 element, because no 2 stations can have more than 2 lines
    return intersection[0];
  }
};

/**
 * Obtains a list of stations (of the station model) from the shortest path.
 * This method also obtains the line of the interchange station that must be followed along the path.
 *
 * @param {StationsJson} stations  Stations dataset
 * @param {string[]} path  Ordered list of station names
 *
 * @returns {Station[]}  Ordered list of station objects, containing the appropriate line.
 */
const getStations = (stations: StationsJson, path: string[]): Station[] => {
  const route: Station[] = [];

  if (path.length <= 1) {
    return [];
  }

  // Accumulate all paths and resolve their lines (because some stations can have multiple lines)
  path.forEach((stationName, i) => {
    const linesFrom = Object.keys(stations[stationName]); // all lines from source station
    let linesTo = [];
    if (i === path.length - 1) {
      // last index
      linesTo = Object.keys(stations[path[i - 1]]); // all lines from previous stationName
    } else {
      linesTo = Object.keys(stations[path[i + 1]]); // all lines from destination stationName
    }

    const fromLine = findNextLine(linesFrom, linesTo);
    const fromPosition = stations[stationName][fromLine];

    if (Array.isArray(fromPosition)) {
      route.push(
        getStation({
          name: stationName,
          line: fromLine,
          position: fromPosition[0],
        })
      );
    } else {
      route.push(
        getStation({
          name: stationName,
          line: fromLine,
          position: fromPosition,
        })
      );
    }
  });

  return route;
};

export { getStations };
