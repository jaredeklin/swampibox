import React from 'react';
import { shallow, mount } from 'enzyme';
import { ButtonContainer } from './ButtonContainer';

describe('ButtonContainer', () => {

  let mockActive = [];

  it('should match the snapshot', () => {
    let wrapper = shallow(<ButtonContainer active={mockActive} />)
    
    expect(wrapper).toMatchSnapshot()
  })

  it('should add an active class if in the active array', () => {
    mockActive = ['People'];
    let wrapper = shallow(<ButtonContainer active={mockActive} />)

    expect(wrapper).toMatchSnapshot()
  })

})