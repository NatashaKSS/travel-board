import React from 'react';
import { mount } from 'enzyme';
import EmptyTimeline from '../EmptyTimeline';

describe('EmptyTimeline', () => {
  it('should render the component', () => {
    const component = <EmptyTimeline />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });
});
