import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', ()=> {
  let wrapper;
  const expectedActive = ['Vehicles'];
  const expectedFavorites = [{
    capacity: "1",
    class: "repulsorcraft",
    model: "X-34 landspeeder",
    name: "X-34 landspeeder"
  }];

  const card = {
    capacity: "1",
    class: "repulsorcraft",
    model: "X-34 landspeeder",
    name: "X-34 landspeeder"
  }

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with an empty state', () => {
    const expectedState = {
      filmData: [],
      favorites: [],
      peopleData: [],
      vehicleData: [],
      planetData: [],
      active: []
    }

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should add an active card to state', () => {
    wrapper.instance().addToActive('Vehicles');
    expect(wrapper.state('active')).toEqual(expectedActive);
  });

  it('should replace an active card in state', () => {
    wrapper.instance().setState({active: ['People']});
    wrapper.instance().addToActive('Vehicles');
    expect(wrapper.state('active')).toEqual(expectedActive);
  });

  it('should add a card to favorites in state', () => {
    wrapper.instance().addToFavorites(card);
    expect(wrapper.state('favorites')).toEqual(expectedFavorites);
  });

  it('should remove favorite card from state if already selected', () => {
    wrapper.instance().addToFavorites(card);
    expect(wrapper.state('favorites')).toEqual(expectedFavorites);
    wrapper.instance().addToFavorites(card);
    expect(wrapper.state('favorites')).toEqual([]);
  })
});



