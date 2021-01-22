import React from 'react';
import { mount } from 'enzyme';
import MaterialUiAutocomplete from '@material-ui/lab/Autocomplete';
import Autocomplete from '../Autocomplete';

describe('Autocomplete', () => {
  let onChangeListener: jest.Mock<any, any>;

  beforeEach(() => {
    onChangeListener = jest.fn();
  });

  it('should render the Autocomplete component', () => {
    const component = <Autocomplete onSelect={onChangeListener} options={[]} />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should map disable options prop', () => {
    const component = <Autocomplete onSelect={onChangeListener} options={[]} />;
    const mounted = mount(component);
    expect(mounted.find(MaterialUiAutocomplete).props().options).toEqual([]);
  });

  it('should map disable clearable prop', () => {
    const component = <Autocomplete onSelect={onChangeListener} options={[]} />;
    const mounted = mount(component);
    expect(mounted.find(MaterialUiAutocomplete).props().disableClearable).toEqual(false);
  });

  it('should be able to invoke onChange to pass selected value', () => {
    const component = <Autocomplete onSelect={onChangeListener} options={[]} />;
    const mounted = mount(component);
    const onChangeHandler = mounted.find(MaterialUiAutocomplete).props().onChange;

    if (onChangeHandler) {
      onChangeHandler({} as any, 'MOCK_VALUE', 'select-option');
      expect(onChangeListener).toHaveBeenCalledTimes(1);
    }
  });
});
