// import { fetchSpecies } from './fetchSpecies';
// import { fetchHomeWorldData } from './fetchHomeWorldData';
import { shallow } from 'enzyme';
import { mockPeopleData } from '../mockData/mockData';
import { fetchPeopleData } from './fetchPeopleData'

// const rootUrl = 'https://swapi.co/api/';

describe('fetchPeopleData', () => {
  let url;
  let cleanPeople;

  beforeEach( async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPeopleData)
    }));

    url = 'https://swapi.co/api/people/'; 
    cleanPeople = await fetchPeopleData();
  })

  it('fetch should be called with correct params', () => {
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it.skip('should call fetchHomeworldData with correct params', () => {

  });   

  it.skip('should call fetchSpecies with correct params', () => {

  });
});

