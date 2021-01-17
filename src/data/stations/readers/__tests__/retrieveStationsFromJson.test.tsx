import { retrieveStationsFromJson } from '../retrieveStationsFromJson';

describe('RetrieveStationsFromJson', () => {
  it('should return some stations', () => {
    expect(retrieveStationsFromJson()).toBeTruthy();
  });
});
