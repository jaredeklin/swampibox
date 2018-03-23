import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', ()=> {
  let wrapper;
  const expectedActive = ['Vehicles'];

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
});



