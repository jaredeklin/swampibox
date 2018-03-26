import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { mockPeopleData } from '../mockData/mockData';
import { fetchPeopleData } from '../helpers/fetchPeopleData';

jest.mock('../helpers/fetchPeopleData')

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
    wrapper = shallow(<App />, {disableLifecycleMethods: true})
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with expected state', () => {

    const expectedState = {
      filmData: [],
      favorites: [],
      peopleData: [],
      vehicleData: [],
      planetData: [],
      active: [],
      opening: true,
      randomNumber: 0,
      error: false
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

  it('toggleOpening should toggle the state of opening', () => {
    expect(wrapper.state('opening')).toEqual(true);
    wrapper.instance().toggleOpening();
    expect(wrapper.state('opening')).toEqual(false);
  })

  // it('should set peopleData state when the requested data is People', async () => {
  //   expect(wrapper.state('peopleData')).toEqual([]);

  //   // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //   //   ok: true,
  //   //   json: () => Promise.resolve(mockPeopleData)
  //   // }));

  //   wrapper.instance().getData('People');
  //   cleanPeopleData = await fetchPeopleData();
  //   console.log(cleanPeopleData)
  //   // expect(fetchPeopleData).toHaveBeenCalled()
  //   expect(wrapper.state('peopleData').toEqual('string'))
  // })
});



