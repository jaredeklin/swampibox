import {
  fetchFilmData,
  fetchPlanetData,
  fetchVehicleData,
} from './apiHelper';

import { cleanVehicleData } from './cleanVehicleData';
import { cleanFilmData } from './cleanFilmData';
import { cleanHomeWorldData } from './cleanHomeWorldData';

import { fetchPeopleData } from './fetchPeopleData';
import { fetchHomeWorldData } from './fetchHomeWorldData';
import { fetchSpecies } from './fetchSpecies';
import { fetchResidents } from './fetchResidents'

import { 
  mockVehicleData, 
  finalVehicleData,
  mockFilmData,
  expectedFilmData,
  mockPersonData,
  mockPlanetData,
  expectedCleanHomeWorld,
  mockPeopleData,
  mockAllPlanetData,
  expectedCleanPlanetData,
  mockGetHomeWorldData,
  mockCharacterDataObj,
  mockCharacterDataArray,
  mockHomeWorld,
  mockResidentData,
  } from '../mockData/mockData'

jest.mock('./cleanVehicleData');
jest.mock('./cleanFilmData');
jest.mock('./cleanHomeWorldData');

describe('fetchVehicleData', () => {
  let url;
  let cleanVehicle;

  beforeEach( async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockVehicleData)
    }));

    url = 'https://swapi.co/api/vehicles/'; 
    cleanVehicle = await fetchVehicleData();
  })

  it('fetch should be called with correct params', () => {
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('cleanVehicleData should be called with correct params', () => {
    expect(cleanVehicleData).toHaveBeenCalledWith(mockVehicleData)
  })
});

describe('fetchFilmData', () => {
  let url;
  let cleanFilm;

  beforeEach( async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilmData)
    }));

    url = 'https://swapi.co/api/films/'; 
    cleanFilm = await fetchFilmData();
  })

  it('fetch should be called with correct params', () => {
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should call cleanFilmData with correct params', () => {
    expect(cleanFilmData).toHaveBeenCalledWith(mockFilmData)
  })
});



describe('fetchHomeworldData', () => {
  let url;
  let cleanHomeWorld;

  beforeEach( async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPlanetData)
    }));

    url = 'https://swapi.co/api/planets/1/';
    cleanHomeWorld = await fetchHomeWorldData(mockGetHomeWorldData);
  })

  it('fetch should be called with correct params', () => {
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('cleanHomeWorldData should be called with correct params', () => {
    expect(cleanHomeWorldData).toHaveBeenCalledWith(mockPlanetData, mockPersonData);
  })
});


describe('fetchSpecies', () => {
  let url;
  let cleanSpecies;

  beforeEach( async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockCharacterDataArray)
    }));

    url = ['https://swapi.co/api/species/1/']; 
    cleanSpecies = await fetchSpecies(mockCharacterDataArray)
  })

  it('fetch should be called with correct params', () => {
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
});

// describe('fetchPlanetData', () => {
//   let url;
//   let cleanPlanetData;

//   beforeEach( async () => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       ok: true,
//       json: () => Promise.resolve(mockPlanetData)
//     }));

//     url = 'https://swapi.co/api/planets/'; 
//     cleanPlanetData = await fetchPlanetData();
//   })

//   it('fetch should be called with correct params', () => {
//     expect(window.fetch).toHaveBeenCalledWith(url)
//   });
// });

describe('fetchResidents', () => {
  let url;
  let cleanResidents;

  beforeEach( async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResidentData)
    }));

    url = 'https://swapi.co/api/people/1/'; 
    cleanResidents = await fetchResidents([mockPlanetData]);
  })

  it('fetch should be called with correct params', () => {
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
})



















