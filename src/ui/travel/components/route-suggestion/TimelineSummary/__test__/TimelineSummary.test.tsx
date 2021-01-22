import React from 'react';
import { mount } from 'enzyme';
import TimelineSummary from '../TimelineSummary';

describe('TimelineSummary', () => {
  it('should render the component', () => {
    const component = <TimelineSummary totalNumberOfStations={10} />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should still render the component, even if input is NULL', () => {
    const component = <TimelineSummary totalNumberOfStations={null as any} />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });
});
