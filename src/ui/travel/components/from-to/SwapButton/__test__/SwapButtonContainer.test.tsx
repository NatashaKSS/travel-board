import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { INITIAL_STATE } from 'ui/travel/ducks/travel.initialState';
import { swapStations } from 'ui/travel/ducks/travelSlice';
import SwapButtonContainer from '../SwapButtonContainer';
import SwapButton from '../SwapButton';

const configureMockStore = configureStore();

describe('SwapButtonContainer', () => {
  let wrapper: ShallowWrapper;
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    // ensure clean state before every test case
    store = configureMockStore({
      travel: INITIAL_STATE,
    });

    wrapper = shallow(<SwapButtonContainer store={store} />);
  });

  it('should be able to dispatch to props, and invoke onClickSwap', () => {
    const component = wrapper.find(SwapButton);
    component.props().onClickSwap();

    const expectedActions = [swapStations()];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
