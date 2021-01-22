import React from 'react';
import { mount } from 'enzyme';
import MaterialUiAutocomplete from '@material-ui/lab/Autocomplete';
import StationInputSection from '../StationInputSection';

describe('StationInputSection', () => {
  let fromOnChangeListener: jest.Mock<any, any>;
  let toOnChangeListener: jest.Mock<any, any>;

  beforeEach(() => {
    fromOnChangeListener = jest.fn();
    toOnChangeListener = jest.fn();
  });

  it('should render the Autocomplete component', () => {
    const component = (
      <StationInputSection
        fromStations={[]}
        onSelectFrom={fromOnChangeListener}
        toStations={[]}
        onSelectTo={toOnChangeListener}
      />
    );
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should map stations prop', () => {
    const component = (
      <StationInputSection
        fromStations={['A']}
        onSelectFrom={fromOnChangeListener}
        toStations={['B']}
        onSelectTo={toOnChangeListener}
      />
    );
    const mounted = mount(component);
    expect(mounted.find(MaterialUiAutocomplete).at(0).props().options).toEqual(['A']);
    expect(mounted.find(MaterialUiAutocomplete).at(1).props().options).toEqual(['B']);
  });

  it('should be able to invoke onChange to pass selected value', () => {
    const component = (
      <StationInputSection
        fromStations={['A']}
        onSelectFrom={fromOnChangeListener}
        toStations={['B']}
        onSelectTo={toOnChangeListener}
      />
    );
    const mounted = mount(component);
    const fromOnChangeHandler = mounted.find(MaterialUiAutocomplete).at(0).props().onChange;
    if (fromOnChangeHandler) {
      fromOnChangeHandler({} as any, 'MOCK_VALUE_0', 'select-option');
      expect(fromOnChangeListener).toHaveBeenCalledTimes(1);
    }
    const toOnChangeHandler = mounted.find(MaterialUiAutocomplete).at(1).props().onChange;
    if (toOnChangeHandler) {
      toOnChangeHandler({} as any, 'MOCK_VALUE_1', 'select-option');
      expect(fromOnChangeListener).toHaveBeenCalledTimes(1);
    }
  });
});
