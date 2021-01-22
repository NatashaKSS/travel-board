import React from 'react';
import { shallow } from 'enzyme';
import Application from '../Application';

describe('Application', () => {
  it('should render the component', () => {
    const component = <Application />;
    const mounted = shallow(component);
    expect(mounted.find(component)).toBeTruthy();
  });
});
