import React from 'react';
import { shallow } from 'enzyme';
import { Opening } from './Opening';
import { expectedFilmData } from '../mockData/mockData'

describe('Opening', () => {
  it('should match the snapshot', () => {
    const number = 0;
    const wrapper = shallow(
      <Opening 
        filmData={expectedFilmData} 
        randomNumber={number} 
      />);
    
    expect(wrapper).toMatchSnapshot();
  })
})