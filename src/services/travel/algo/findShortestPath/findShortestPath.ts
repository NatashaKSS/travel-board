import { StationsJson } from 'data/stations/types/stations.types';
import { AdjacentStations } from '../convertStationsToAdjacencyList/convertStationsToAdjacencyList.types';
import { convertStationsToAdjacencyList } from '../convertStationsToAdjacencyList/convertStationsToAdjacencyList';

/**
 * Obtains the shortest path, using an adjacency list with breadth first search.
 *
 * @param {AdjacentStations} adjacencyList  Mapping of adjacent stations we have currently
 * @param {string} start  Starting station
 * @param {string} end  Last station
 *
 * @returns {Station[] | null}  Ordered list of visited nodes, or NULL if the input was malformed
 */
const pathBreadthFirstSearch = (adjacencyList: AdjacentStations, start: string, end: string) => {
  const queue = [[start]]; // queue of valid paths
  const visited = new Set(); // for taking cycles into account and not walking same node twice

  try {
    while (queue.length > 0) {
      const path = queue.shift() as string[];
      const lastNodeInPath = path[path.length - 1];

      if (lastNodeInPath === end) {
        return path; // reached end
      } else {
        if (!visited.has(lastNodeInPath)) {
          const destinations = adjacencyList[lastNodeInPath];

          for (const destination of destinations) {
            // Continue finding neighbouring paths
            const newPath = [...path, destination.name];
            queue.push(newPath);
          }

          visited.add(lastNodeInPath);
        }
      }
    }

    console.warn(`No path was found from '${start}' to '${end}'.`);
    return [];
  } catch (error) {
    console.error(
      `An error occurred while finding the shortest path with BFS: "${error.message}".`
    );
    return [];
  }
};

/**
 * Obtains the shortest path between 2 stations
 *
 * @param {StationsJson} stations  Mapping all MRT stations
 * @param {string} start  Starting station
 * @param {string} end  Last station
 *
 * @returns {Station[] | null}  Ordered list of all stations along the shortest path
 */
const findShortestPath = (stations: StationsJson, start: string, end: string) => {
  const adjacencyList = convertStationsToAdjacencyList(stations);
  const shortestPath = pathBreadthFirstSearch(adjacencyList, start, end);
  return shortestPath;
};

export { findShortestPath };
