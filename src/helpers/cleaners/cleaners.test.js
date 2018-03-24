import {
  cleanFilmData,
  cleanHomeWorldData,
  cleanPlanetData,
} from './cleaners';

import { cleanVehicleData } from '../cleanVehicleData/cleanVehicleData';

import { 
  mockVehicleData, 
  finalVehicleData,
  mockFilmData,
  expectedFilmData,
  } from '../../mockData/mockData'

describe('cleanVehicleData', () => {

  it('should return clean data', () => {
    expect(cleanVehicleData(mockVehicleData)).toEqual(finalVehicleData);
    expect(cleanVehicleData(mockVehicleData)).not.toEqual([])
  });
});

describe('cleanFilmData', () => {
  it('should return clean film data', () => {
    expect(cleanFilmData(mockFilmData)).toEqual(expectedFilmData)
  });
});

describe('cleanHomeWorldData', () => {

});

describe('cleanPlanetData', () => {

});