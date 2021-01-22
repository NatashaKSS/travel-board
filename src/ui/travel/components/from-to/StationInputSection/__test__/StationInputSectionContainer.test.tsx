import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { INITIAL_STATE } from 'ui/travel/ducks/travel.initialState';
import { setFromStation, setToStation } from 'ui/travel/ducks/travelSlice';
import StationInputSectionContainer from '../StationInputSectionContainer';
import StationInputSection from '../StationInputSection';

const configureMockStore = configureStore();

describe('StationInputSectionContainer', () => {
  let wrapper: ShallowWrapper;
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    // ensure clean state before every test case
    store = configureMockStore({
      travel: INITIAL_STATE,
    });

    wrapper = shallow(<StationInputSectionContainer store={store} />);
  });

  it('should render the connected component', () => {
    expect(wrapper.find(StationInputSection)).toHaveLength(1);
  });

  it('should be able to map state to props', () => {
    store = configureMockStore({
      travel: {
        selectedFromStation: 'Ang Mo Kio',
        selectedToStation: 'Bishan',
      },
    });

    wrapper = shallow(<StationInputSectionContainer store={store} />);
    expect(wrapper.find(StationInputSection).props().fromStations).toBeTruthy();
    expect(wrapper.find(StationInputSection).props().toStations).toBeTruthy();
  });

  it('should be able to dispatch to props, and invoke onSelectFrom', () => {
    const component = wrapper.find(StationInputSection);
    component.props().onSelectFrom('Ang Mo Kio');

    const expectedActions = [setFromStation('Ang Mo Kio')];
    expect(store.getActions()).toEqual(expectedActions);

    // No changes to store
    component.props().onSelectFrom(null);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should be able to dispatch to props, and invoke onSelectTo', () => {
    const component = wrapper.find(StationInputSection);
    component.props().onSelectTo('Ang Mo Kio');

    const expectedActions = [setToStation('Ang Mo Kio')];
    expect(store.getActions()).toEqual(expectedActions);

    // No changes to store
    component.props().onSelectFrom(null);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
