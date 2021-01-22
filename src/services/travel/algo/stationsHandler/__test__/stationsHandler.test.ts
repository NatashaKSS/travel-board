import { getStations } from '../stationsHandler';

describe('stationsHandler', () => {
  const LINE_NS = 'NS';
  const LINE_EW = 'EW';

  const MOCK_STATIONS_1 = {
    A: { [LINE_NS]: 1 },
    B: { [LINE_NS]: 2 },
    C: { [LINE_EW]: 1 },
  };

  const MOCK_STATIONS_2 = {
    A: { [LINE_NS]: [2, 7], [LINE_EW]: 4 },
    B: { [LINE_NS]: 1 },
    C: { [LINE_EW]: 5 },
  };

  const MOCK_STATIONS_3 = {
    A: { [LINE_NS]: [1, 2], [LINE_EW]: 3 },
    B: { [LINE_EW]: 5 },
  };

  it('should return map of stations on 1 line', () => {
    expect(getStations(MOCK_STATIONS_1, ['A', 'B', 'C'])).toEqual([
      {
        id: 'ANS',
        line: LINE_NS,
        name: 'A',
        position: 1,
      },
      {
        id: 'BNS',
        line: LINE_NS,
        name: 'B',
        position: 2,
      },
      {
        id: 'CEW',
        line: LINE_EW,
        name: 'C',
        position: 1,
      },
    ]);
  });

  it('should return map of stations on 2 interchange line', () => {
    expect(getStations(MOCK_STATIONS_2, ['A', 'B', 'C'])).toEqual([
      {
        id: 'ANS',
        line: LINE_NS,
        name: 'A',
        position: 2,
      },
      {
        id: 'BNS',
        line: LINE_NS,
        name: 'B',
        position: 1,
      },
      {
        id: 'CEW',
        line: LINE_EW,
        name: 'C',
        position: 5,
      },
    ]);
  });

  it('should return map of stations on 2 interchange lines (EW)', () => {
    expect(getStations(MOCK_STATIONS_3, ['A', 'B'])).toEqual([
      {
        id: 'AEW',
        line: LINE_EW,
        name: 'A',
        position: 3,
      },
      {
        id: 'BEW',
        line: LINE_EW,
        name: 'B',
        position: 5,
      },
    ]);
  });
});
