import React from 'react';
import { mount } from 'enzyme';
import { IconButton } from '@material-ui/core';
import SwapButton from '../SwapButton';

describe('SwapButton', () => {
  let onClickListener: jest.Mock<any, any>;

  beforeEach(() => {
    onClickListener = jest.fn();
  });

  it('should render the component', () => {
    const component = <SwapButton onClickSwap={onClickListener} />;
    const mounted = mount(component);
    expect(mounted.find(component)).toBeTruthy();
  });

  it('should be able to invoke onChange to pass selected value', () => {
    const component = <SwapButton onClickSwap={onClickListener} />;
    const mounted = mount(component);
    const handler = mounted.find(IconButton).props().onChange;
    if (handler) {
      handler({} as any);
      expect(onClickListener).toHaveBeenCalledTimes(1);
    }
  });
});
