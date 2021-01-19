import { retrieveStationsFromJson } from 'data/stations/readers/retrieveStationsFromJson';
import { findShortestPath } from '../algo/findShortestPath/findShortestPath';

/**
 * Obtains the best route in the map of MRT stations.
 *
 * @param {string} start  Name of starting station
 * @param {string} end  Name of end station
 * @returns {Station[]}  Ordered list of visited nodes
 */
const mapShortestRoute = (start: string, end: string) => {
  const stations = retrieveStationsFromJson();
  const shortestPath = findShortestPath(stations, start, end);
  return shortestPath;
};

export { mapShortestRoute };
