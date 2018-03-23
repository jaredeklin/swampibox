import React from 'react';
import { shallow, mount } from 'enzyme';
import { ButtonContainer } from './ButtonContainer';

describe('ButtonContainer', () => {
  let mockGetData = jest.fn();
  let mockActive = [];

  it('should match the snapshot', () => {
    let wrapper = shallow(
      <ButtonContainer 
        getData={mockGetData} 
        active={mockActive} 
      />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should add an active class if in the active array', () => {
    mockActive = ['People'];
    let wrapper = shallow(
      <ButtonContainer 
        getData={mockGetData} 
        active={mockActive} 
      />)

    expect(wrapper).toMatchSnapshot()
  })

})