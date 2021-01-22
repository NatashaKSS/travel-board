import { Station } from '../models/stations';
import { retrieveStationsFromJson } from 'data/stations/readers/retrieveStationsFromJson';
import { findShortestPath } from '../algo/findShortestPath/findShortestPath';
import { getStations } from '../algo/stationsHandler/stationsHandler';

const STATIONS = retrieveStationsFromJson();

/**
 * Obtains the best route in the map of MRT stations.
 *
 * @param {string} start  Name of starting station
 * @param {string} end  Name of end station
 * @returns {Station[]}  Ordered list of visited nodes
 */
const mapShortestRoute = (start: string, end: string): Station[] => {
  if (start === end) {
    return [];
  } else {
    const shortestPath = findShortestPath(STATIONS, start, end);
    const route = getStations(STATIONS, shortestPath);
    return route;
  }
};

export { mapShortestRoute };
