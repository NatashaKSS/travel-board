import { mapShortestRoute } from '../mapShortestRoute';

describe('mapShortestRoute', () => {
  it('should return shortest path of stations on 1 line', () => {
    expect(mapShortestRoute('Yew Tee', 'Ang Mo Kio')).toEqual([
      'Yew Tee',
      'Kranji',
      'Marsiling',
      'Woodlands',
      'Admiralty',
      'Sembawang',
      'Canberra',
      'Yishun',
      'Khatib',
      'Yio Chu Kang',
      'Ang Mo Kio',
    ]);
  });

  it('should return shortest path of stations across 2 lines', () => {
    expect(mapShortestRoute('Yew Tee', 'Phoenix')).toEqual([
      'Yew Tee',
      'Choa Chu Kang',
      'South View',
      'Keat Hong',
      'Teck Whye',
      'Phoenix',
    ]);
  });

  it('should return shortest path of stations across 2 lines, from interchange to interchange', () => {
    expect(mapShortestRoute('Choa Chu Kang', 'Bukit Panjang')).toEqual([
      'Choa Chu Kang',
      'South View',
      'Keat Hong',
      'Teck Whye',
      'Phoenix',
      'Bukit Panjang',
    ]);
  });

  it('should return shortest path of stations across 3 lines, from interchange to interchange', () => {
    expect(mapShortestRoute('Choa Chu Kang', 'Sixth Avenue')).toEqual([
      'Choa Chu Kang',
      'South View',
      'Keat Hong',
      'Teck Whye',
      'Phoenix',
      'Bukit Panjang',
      'Cashew',
      'Hillview',
      'Beauty World',
      'King Albert Park',
      'Sixth Avenue',
    ]);
  });

  it('should return shortest path of stations across 3 lines, with a cycle', () => {
    expect(mapShortestRoute('Choa Chu Kang', 'Fajar')).toEqual([
      'Choa Chu Kang',
      'South View',
      'Keat Hong',
      'Teck Whye',
      'Phoenix',
      'Bukit Panjang',
      'Petir',
      'Pending',
      'Bangkit',
      'Fajar',
    ]);
  });

  it('should return shortest path of stations across 3 lines, with 2 cycles', () => {
    expect(mapShortestRoute('Samudera', 'Oasis')).toEqual([
      'Samudera',
      'Punggol Point',
      'Teck Lee',
      'Sam Kee',
      'Punggol',
      'Damai',
      'Oasis',
    ]);
  });

  // ======================
  // VARIETY TESTS
  // Tests that go through a variety of different mapping cases
  // ======================

  it('should return shortest path of stations (ad-hoc test #1)', () => {
    expect(mapShortestRoute('Buona Vista', 'Serangoon')).toEqual([
      'Buona Vista',
      'Holland Village',
      'Farrer Road',
      'Botanic Gardens',
      'Caldecott',
      'Marymount',
      'Bishan',
      'Lorong Chuan',
      'Serangoon',
    ]);
  });

  it('should return shortest path of stations (ad-hoc test #2)', () => {
    expect(mapShortestRoute('Buona Vista', 'Marina Bay')).toEqual([
      'Buona Vista',
      'Commonwealth',
      'Queenstown',
      'Redhill',
      'Tiong Bahru',
      'Outram Park',
      'Tanjong Pagar',
      'Raffles Place',
      'Marina Bay',
    ]);
  });

  it('should return shortest path of stations (ad-hoc test #3)', () => {
    expect(mapShortestRoute('Woodlands North', 'Marina Bay')).toEqual([
      'Woodlands North',
      'Woodlands',
      'Woodlands South',
      'Springleaf',
      'Lentor',
      'Mayflower',
      'Bright Hill',
      'Upper Thomson',
      'Caldecott',
      'Botanic Gardens',
      'Stevens',
      'Newton',
      'Little India',
      'Dhoby Ghaut',
      'City Hall',
      'Raffles Place',
      'Marina Bay',
    ]);
  });

  it('should return shortest path of stations (ad-hoc test #4)', () => {
    expect(mapShortestRoute('HarbourFront', 'Punggol')).toEqual([
      'HarbourFront',
      'Outram Park',
      'Chinatown',
      'Clarke Quay',
      'Dhoby Ghaut',
      'Little India',
      'Farrer Park',
      'Boon Keng',
      'Potong Pasir',
      'Woodleigh',
      'Serangoon',
      'Kovan',
      'Hougang',
      'Buangkok',
      'Sengkang',
      'Punggol',
    ]);
  });

  it('should return shortest path of stations (ad-hoc test #5)', () => {
    expect(mapShortestRoute('Changi Airport', 'Orchard')).toEqual([
      'Changi Airport',
      'Expo',
      'Tanah Merah',
      'Bedok',
      'Kembangan',
      'Eunos',
      'Paya Lebar',
      'Aljunied',
      'Kallang',
      'Lavender',
      'Bugis',
      'City Hall',
      'Dhoby Ghaut',
      'Somerset',
      'Orchard',
    ]);
  });

  it('should return shortest path of stations (ad-hoc test #6)', () => {
    expect(mapShortestRoute('Marymount', 'Rochor')).toEqual([
      'Marymount',
      'Caldecott',
      'Botanic Gardens',
      'Stevens',
      'Newton',
      'Little India',
      'Rochor',
    ]);
  });
});
