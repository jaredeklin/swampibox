import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if active', () => {
    const mockCategory = 'Favorites';
    const wrapper = shallow(<Button category={mockCategory}/>);
    expect(wrapper).toMatchSnapshot();
  });
});