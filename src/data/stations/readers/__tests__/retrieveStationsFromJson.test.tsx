import { retrieveStationsFromJson, retrieveStationNames } from '../retrieveStationsFromJson';

describe('RetrieveStationsFromJson', () => {
  it('should return some stations', () => {
    expect(retrieveStationsFromJson()).toBeTruthy();
  });

  it('should return some station names', () => {
    expect(retrieveStationNames()).toBeTruthy();
  });
});
