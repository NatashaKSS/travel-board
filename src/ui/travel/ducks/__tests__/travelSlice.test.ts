import travelSlice, { setFromStation, setToStation } from '../travelSlice';
import { INITIAL_STATE } from '../travel.initialState';

describe('Travel Slice Reducer', () => {
  it('should handle initial state', () => {
    const action = {} as any;

    expect(travelSlice(INITIAL_STATE, action)).toEqual(INITIAL_STATE);
  });

  it('should set state using setFromStation', () => {
    expect(travelSlice(INITIAL_STATE, setFromStation('station'))).toEqual({
      ...INITIAL_STATE,
      selectedFromStation: 'station',
    });
  });

  it('should set state using setFromStation', () => {
    expect(travelSlice(INITIAL_STATE, setToStation('station'))).toEqual({
      ...INITIAL_STATE,
      selectedToStation: 'station',
    });
  });
});
