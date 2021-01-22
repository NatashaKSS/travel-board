import { Station } from 'services/travel/models/stations';
import { convertStationsToAdjacencyList } from '../convertStationsToAdjacencyList';

describe('convertStationsToAdjacencyList', () => {
  const LINE_NS = 'NS';
  const LINE_EW = 'EW';

  const createStation = (name: string, line: string, position: number): Station => {
    return {
      id: `${name}${line}`,
      name,
      line,
      position,
    };
  };

  describe('Success scenarios', () => {
    const MOCK_STATIONS_1 = {
      A: { [LINE_NS]: 1 },
    };
    const MOCK_STATIONS_2 = {
      A: { [LINE_NS]: 1 },
      B: { [LINE_NS]: 2 },
      C: { [LINE_NS]: 3 },
    };
    const MOCK_STATIONS_3 = {
      A: { [LINE_NS]: 1 },
      B: { [LINE_NS]: 2 },
      C: { [LINE_NS]: 3 },
      D: { [LINE_EW]: 1 },
      E: { [LINE_EW]: 2 },
    };
    const MOCK_STATIONS_4 = {
      A: { [LINE_NS]: [2, 33] },
      B: { [LINE_NS]: 1 },
      C: { [LINE_NS]: 5 },
      D: { [LINE_EW]: 1 },
      E: { [LINE_NS]: 32 },
    };
    const MOCK_STATIONS_5 = {
      A: { [LINE_NS]: 1 },
      C: { [LINE_NS]: 3 },
    };

    it('should return adjacents of 1 station', () => {
      expect(convertStationsToAdjacencyList(MOCK_STATIONS_1)).toEqual({
        A: [],
      });
    });

    it('should return adjacents of 3 straight line stations', () => {
      expect(convertStationsToAdjacencyList(MOCK_STATIONS_2)).toEqual({
        A: [createStation('B', LINE_NS, 2)],
        B: [createStation('A', LINE_NS, 1), createStation('C', LINE_NS, 3)],
        C: [createStation('B', LINE_NS, 2)],
      });
    });

    it('should return adjacents of 3 straight line stations from different lines', () => {
      expect(convertStationsToAdjacencyList(MOCK_STATIONS_3)).toEqual({
        A: [createStation('B', LINE_NS, 2)],
        B: [createStation('A', LINE_NS, 1), createStation('C', LINE_NS, 3)],
        C: [createStation('B', LINE_NS, 2)],
        D: [createStation('E', LINE_EW, 2)],
        E: [createStation('D', LINE_EW, 1)],
      });
    });

    it('should return adjacents of stations with cycle (i.e. multiple positions in 1 line)', () => {
      expect(convertStationsToAdjacencyList(MOCK_STATIONS_4)).toEqual({
        A: [
          createStation('B', LINE_NS, 1),
          createStation('C', LINE_NS, 5),
          createStation('E', LINE_NS, 32),
        ],
        B: [createStation('A', LINE_NS, 2)],
        C: [createStation('A', LINE_NS, 2), createStation('E', LINE_NS, 32)],
        D: [],
        E: [createStation('C', LINE_NS, 5), createStation('A', LINE_NS, 33)],
      });
    });

    it('should return adjacents of 2 disconnected line stations', () => {
      expect(convertStationsToAdjacencyList(MOCK_STATIONS_5)).toEqual({
        A: [createStation('C', LINE_NS, 3)],
        C: [createStation('A', LINE_NS, 1)],
      });
    });
  });

  describe('Error Handling', () => {
    // it('should return default of NULL adjacency list', () => {
    //   expect(convertStationsToAdjacencyList(null as any)).toEqual({});
    //   expect(convertStationsToAdjacencyList(undefined as any)).toEqual({});
    // });
    // it('should return default of empty adjacency list', () => {
    //   expect(convertStationsToAdjacencyList({} as any)).toEqual({});
    // });
    // it('should still return default even if input is a malformed JSON', () => {
    //   expect(convertStationsToAdjacencyList({ A: null } as any)).toEqual({});
    // });
    // it('should still return empty adjacents, even if station position is NULL', () => {
    //   expect(convertStationsToAdjacencyList({ A: { CC: null } } as any)).toEqual({
    //     A: [],
    //   });
    // });
  });
});
