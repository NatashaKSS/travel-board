import React from 'react';
import { mount } from 'enzyme';
import TimelineSection from '../TimelineSection';

describe('TimelineSection', () => {
  it('should render the component', () => {
    const component = (
      <TimelineSection
        path={[
          {
            id: 'ANS',
            line: 'NS',
            name: 'A',
            position: 2,
          },
        ]}
      />
    );
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should render the component, even without a path', () => {
    const component = <TimelineSection path={[]} />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });
});
