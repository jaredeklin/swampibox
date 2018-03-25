import { cleanPlanetData } from './cleanPlanetData';
import { cleanHomeWorldData } from './cleanHomeWorldData';
import { cleanVehicleData } from './cleanVehicleData';
import { cleanFilmData } from './cleanFilmData';
import { cleanSpecies } from './cleanSpecies'
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
  mockCharacterDataObj,
  mockSpeciesData,
  expectedPeopleData,
  } from '../mockData/mockData'

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
  it('should return clean homeworld data', () => {
    expect(cleanHomeWorldData(mockPlanetData, mockPersonData)).toEqual(expectedCleanHomeWorld)
  });
});

describe('cleanPlanetData', () => {
  it('should return clean planet data', () => {
    expect(cleanPlanetData(mockAllPlanetData)).toEqual(expectedCleanPlanetData)
  });
});

describe('cleanSpecies', () => {
  it('should return cleanSpecies data', () => {
    expect(cleanSpecies(mockSpeciesData , mockCharacterDataObj)).toEqual(expectedPeopleData);
  });
});
