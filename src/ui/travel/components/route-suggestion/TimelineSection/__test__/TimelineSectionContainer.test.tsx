import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { INITIAL_STATE } from 'ui/travel/ducks/travel.initialState';
import TimelineSectionContainer from '../TimelineSectionContainer';
import TimelineSection from '../TimelineSection';

const configureMockStore = configureStore();

describe('TimelineSectionContainer', () => {
  let wrapper: ShallowWrapper;
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    // ensure clean state before every test case
    store = configureMockStore({
      travel: INITIAL_STATE,
    });

    wrapper = shallow(<TimelineSectionContainer store={store} />);
  });

  it('should render the connected component', () => {
    expect(wrapper.find(TimelineSection)).toHaveLength(1);
  });

  it('should be able to map state to props, for valid stations', () => {
    store = configureMockStore({
      travel: {
        selectedFromStation: 'Ang Mo Kio',
        selectedToStation: 'Bishan',
      },
    });

    wrapper = shallow(<TimelineSectionContainer store={store} />);
    expect(wrapper.find(TimelineSection).props().path.length >= 1).toEqual(true);
  });

  it('should be able to map state to props, for invalid stations', () => {
    store = configureMockStore({
      travel: {
        selectedFromStation: 'Ang Mo Kio',
        selectedToStation: 'Ang Mo Kio',
      },
    });

    wrapper = shallow(<TimelineSectionContainer store={store} />);
    expect(wrapper.find(TimelineSection).props().path.length === 0).toEqual(true);
  });
});
