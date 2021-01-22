import React from 'react';
import { mount } from 'enzyme';
import MaterialUiAutocomplete from '@material-ui/lab/Autocomplete';
import Autocomplete from '../Autocomplete';

describe('Autocomplete', () => {
  it('should render the Autocomplete component', () => {
    const component = <Autocomplete options={[]} />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should map disable options prop', () => {
    const component = <Autocomplete options={[]} />;
    const mounted = mount(component);
    expect(mounted.find(MaterialUiAutocomplete).props().options).toEqual([]);
  });

  it('should map disable clearable prop', () => {
    const component = <Autocomplete options={[]} />;
    const mounted = mount(component);
    expect(mounted.find(MaterialUiAutocomplete).props().disableClearable).toEqual(false);
  });
});
