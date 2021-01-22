import { Station } from 'services/travel/models/stations';
import * as ConvertStationsToAdjacencyListModule from '../../convertStationsToAdjacencyList/convertStationsToAdjacencyList';
import { findShortestPath } from '../findShortestPath';

describe('findShortestPath', () => {
  let adjacencyListSpy: jest.SpyInstance;

  const createStation = (name: string, line: string, position: number): Station => {
    return {
      id: `${name}${line}`,
      name,
      line,
      position,
    };
  };

  const MOCK_A = createStation('A', 'NS', 1);
  const MOCK_B = createStation('B', 'NS', 2);
  const MOCK_C = createStation('C', 'NS', 3);
  const MOCK_D = createStation('D', 'NS', 4);
  const MOCK_STATIONS: any = {};
  const MOCK_ADJACENCY_1 = {
    A: [MOCK_B],
    B: [MOCK_C],
    C: [],
  };

  // ==============
  // PREPARE
  // ==============

  const prepare = () => {
    adjacencyListSpy = jest
      .spyOn(ConvertStationsToAdjacencyListModule, 'convertStationsToAdjacencyList')
      .mockReturnValue(MOCK_ADJACENCY_1);
  };

  const cleanUp = () => {
    adjacencyListSpy.mockRestore();
  };

  // ==============
  // TESTS
  // ==============

  describe('Success scenarios', () => {
    const MOCK_ADJACENCY_2 = {
      A: [MOCK_B],
      B: [MOCK_A, MOCK_C],
      C: [MOCK_B],
    };
    const MOCK_ADJACENCY_3 = {
      A: [MOCK_B],
      B: [MOCK_A, MOCK_C],
      C: [MOCK_B],
      D: [],
    };

    beforeEach(prepare);
    afterEach(cleanUp);

    it('should return path, without cycles', () => {
      adjacencyListSpy = jest
        .spyOn(ConvertStationsToAdjacencyListModule, 'convertStationsToAdjacencyList')
        .mockReturnValue(MOCK_ADJACENCY_1);
      expect(findShortestPath(MOCK_STATIONS, MOCK_A.name, MOCK_C.name)).toEqual([
        MOCK_A.name,
        MOCK_B.name,
        MOCK_C.name,
      ]);
    });

    it('should return path, with cycles', () => {
      adjacencyListSpy = jest
        .spyOn(ConvertStationsToAdjacencyListModule, 'convertStationsToAdjacencyList')
        .mockReturnValue(MOCK_ADJACENCY_2);
      expect(findShortestPath(MOCK_STATIONS, MOCK_A.name, MOCK_C.name)).toEqual([
        MOCK_A.name,
        MOCK_B.name,
        MOCK_C.name,
      ]);
    });

    it('should return path, even in disconnected graph', () => {
      adjacencyListSpy = jest
        .spyOn(ConvertStationsToAdjacencyListModule, 'convertStationsToAdjacencyList')
        .mockReturnValue(MOCK_ADJACENCY_3);
      expect(findShortestPath(MOCK_STATIONS, MOCK_A.name, MOCK_C.name)).toEqual([
        MOCK_A.name,
        MOCK_B.name,
        MOCK_C.name,
      ]);
      expect(findShortestPath(MOCK_STATIONS, MOCK_A.name, MOCK_D.name)).toEqual([]);
      expect(findShortestPath(MOCK_STATIONS, MOCK_B.name, MOCK_D.name)).toEqual([]);
      expect(findShortestPath(MOCK_STATIONS, MOCK_C.name, MOCK_D.name)).toEqual([]);
    });

    it('should return path to only itself', () => {
      adjacencyListSpy = jest
        .spyOn(ConvertStationsToAdjacencyListModule, 'convertStationsToAdjacencyList')
        .mockReturnValue({ A: [null as any] });
      expect(findShortestPath(MOCK_STATIONS, MOCK_A.name, MOCK_A.name)).toEqual([MOCK_A.name]);
    });
  });

  describe('Error Handling', () => {
    beforeEach(prepare);
    afterEach(cleanUp);

    it('should not return shortest path, and returna a default, as no valid path was found', () => {
      adjacencyListSpy = jest
        .spyOn(ConvertStationsToAdjacencyListModule, 'convertStationsToAdjacencyList')
        .mockReturnValue({ A: [], B: [] });
      expect(findShortestPath(MOCK_STATIONS, MOCK_A.name, MOCK_B.name)).toEqual([]);
    });

    it('should not return shortest path as input payload is malformed', () => {
      adjacencyListSpy = jest
        .spyOn(ConvertStationsToAdjacencyListModule, 'convertStationsToAdjacencyList')
        .mockReturnValue({ A: [MOCK_B] });
      expect(findShortestPath(MOCK_STATIONS, MOCK_A.name, MOCK_C.name)).toEqual([]);
    });
  });
});
