import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import CustomThemeProvider from '../CustomThemeProvider';

describe('CustomThemeProvider', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <CustomThemeProvider>
        <div>Some Text</div>
      </CustomThemeProvider>
    );
  });

  it('should render the theme provider with a react component', () => {
    const component = wrapper.find('div');
    expect(component).not.toBeFalsy();
    expect(component.text()).toEqual('Some Text');
  });
});
