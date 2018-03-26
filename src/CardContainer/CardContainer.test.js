import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';

describe('CardContainer', () => {

  let mockAllData = {
    filmData: [],
    favorites: [],
    peopleData: [],
    vehicleData: [{
      capacity: "1",
      class: "repulsorcraft",
      model: "X-34 landspeeder",
      name: "X-34 landspeeder"
    }],
    planetData: [],
    active: ['Vehicles']
  };

  it('should match the snapshot', () => {
    let wrapper = shallow(
      <CardContainer 
        allData={mockAllData}
        props={mockAllData}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
