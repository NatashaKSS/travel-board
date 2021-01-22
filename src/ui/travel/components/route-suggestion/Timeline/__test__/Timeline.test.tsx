import React from 'react';
import { mount } from 'enzyme';
import Timeline from '../Timeline';
import MaterialUiTimeline from '@material-ui/lab/Timeline';
import EmptyTimeline from '../../EmptyTimeline/EmptyTimeline';

describe('Timeline', () => {
  it('should render an empty timeline, without a path', () => {
    const component = <Timeline path={[]} />;
    const mounted = mount(component);
    expect(mounted.contains(<EmptyTimeline />)).toEqual(true);
    expect(mounted.contains(<MaterialUiTimeline />)).toEqual(false);
  });

  it('should render the component', () => {
    const component = (
      <Timeline
        path={[
          {
            id: 'ANS',
            line: 'NS',
            name: 'A',
            position: 1,
          },
          {
            id: 'BNS',
            line: 'NS',
            name: 'B',
            position: 2,
          },
        ]}
      />
    );
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should render the component with transfers', () => {
    const component = (
      <Timeline
        path={[
          {
            id: 'ANS',
            line: 'NS',
            name: 'A',
            position: 1,
          },
          {
            id: 'BEW',
            line: 'EW',
            name: 'B',
            position: 2,
          },
          {
            id: 'CCE',
            line: 'CE',
            name: 'C',
            position: 3,
          },
        ]}
      />
    );
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });
});
