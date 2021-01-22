import React from 'react';
import { mount } from 'enzyme';
import TimelineStation from '../TimelineStation';

describe('TimelineStation', () => {
  it('should render the component', () => {
    const component = <TimelineStation stationName="Yew Tee" />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should render the component, with description', () => {
    const component = <TimelineStation stationName="Yew Tee" description="Description" />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should render the component, with NULL inputs', () => {
    const component = <TimelineStation stationName={null as any} description={null as any} />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });
});
