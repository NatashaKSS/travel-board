import React from 'react';
import { shallow } from 'enzyme';
import { ProviderWrapper } from '../ProviderWrapper';

describe('Provider Wrapper', () => {
  it('should render', () => {
    const wrapper = shallow(
      <ProviderWrapper>
        <div>Some Text</div>
      </ProviderWrapper>
    );
    expect(wrapper.find('div').text()).toEqual('Some Text');
  });
});
