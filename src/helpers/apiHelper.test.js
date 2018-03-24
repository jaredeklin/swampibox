import {
  fetchPeopleData, 
  fetchVehicleData,
  cleanFilmData,
  fetchFilmData,
} from './apiHelper';

import { cleanVehicleData } from './cleanVehicleData/cleanVehicleData'

import { 
  mockVehicleData, 
  finalVehicleData,
  mockFilmData,
  expectedFilmData,
  } from '../mockData/mockData'
// jest.mock('./cleanVehicleData/cleanVehicleData')

describe('fetchVehicleData', () => {

  it('should return clean data', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockVehicleData)
    }));

    const cleanVehicle = await fetchVehicleData();

    expect(cleanVehicle).toEqual(finalVehicleData);
  });
});



describe('fetchFilmData', () => {


  it('should return clean data', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilmData)
    }));   

    const cleanFilm = await fetchFilmData();

    expect(cleanFilm).toEqual(expectedFilmData)
  });
});



describe('fetchPeopleData', () => {

});

describe('fetchHomeworldData', () => {

});


describe('fetchSpecies', () => {

});

describe('fetchPlanetData', () => {

});

describe('fetchResidents', () => {

})



















