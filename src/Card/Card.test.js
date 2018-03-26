import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {

  it('should match the snapshot', () => {
    const mockAddToFavorites = jest.fn();
    const mockProps = { 
      capacity: "1",
      class: "repulsorcraft",
      model: "X-34 landspeeder",
      name: "X-34 landspeeder"
    };

    let wrapper = shallow(
      <Card 
        addToFavorites={mockAddToFavorites}
        properties={mockProps}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});