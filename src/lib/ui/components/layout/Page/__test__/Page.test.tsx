import React from 'react';
import { mount } from 'enzyme';
import Page from '../Page';

describe('Page', () => {
  it('should display a string as a React Node within page', () => {
    const component = <Page>Content</Page>;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should display a child HTML element as a React Node within page', () => {
    const componentText = 'a child div';
    const component = (
      <Page>
        <div>{componentText}</div>
      </Page>
    );
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
    expect(mounted.contains(componentText)).toBeTruthy();
  });
});
