import { getStation } from '../stations';

describe('getStation', () => {
  it('should return default station object', () => {
    expect(
      getStation({
        name: null,
        line: null,
        position: 1,
      })
    ).toEqual({
      id: expect.any(String),
      name: '',
      line: '',
      position: 1,
    });
  });

  it('should return mapped station object', () => {
    expect(
      getStation({
        name: 'name',
        line: 'line',
        position: 1,
      })
    ).toEqual({
      id: expect.any(String),
      name: 'name',
      line: 'line',
      position: 1,
    });
  });
});
