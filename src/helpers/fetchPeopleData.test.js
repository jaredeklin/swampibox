import { fetchSpecies } from './fetchSpecies';
import { fetchHomeWorldData } from './fetchHomeWorldData';
import { shallow } from 'enzyme';
import { mockPeopleData, expectedCleanHomeWorld } from '../mockData/mockData';
import { fetchPeopleData } from './fetchPeopleData';   
jest.mock('./fetchHomeWorldData');
jest.mock('./fetchSpecies');

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

  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.reject(mockPeopleData)
    }));

    url = 'https://swapi.co/api/peop'; 
    cleanPeople = await fetchPeopleData();


  })

  it('should call fetchHomeworldData with correct params', () => {
    expect(fetchHomeWorldData).toHaveBeenCalledWith(mockPeopleData.results)
  });   

  it('should call fetchSpecies with correct params', () => {
    expect(fetchSpecies).toHaveBeenCalledWith(expectedCleanHomeWorld)
  });
});

