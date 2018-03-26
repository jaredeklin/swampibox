import { cleanVehicleData } from './cleanVehicleData';
import { cleanFilmData } from './cleanFilmData';
import { cleanPlanetData } from './cleanPlanetData';

const rootUrl = 'https://swapi.co/api/';

export const fetchFilmData = () => {
  return fetch(`${rootUrl}films/`)
    .then(response => response.json())
    .then(filmData => cleanFilmData(filmData));
};

export const fetchPlanetData = () => {

  return fetch(`${rootUrl}planets/`)
    .then(response => response.json())
    .then(planetData => cleanPlanetData(planetData))
    .then(updatedData => fetchResidents(updatedData));
};

export const fetchResidents = (planetData) => {

  const promises = planetData.map(planet => {

    const inhabitants = planet.residents.map(resident => {

      return fetch(resident)
        .then(response => response.json())
        .then(residentData => residentData.name);
    });
    
    return Promise.all(inhabitants)
      .then(residentNames => (
        {...planet, residents: residentNames.join(', ')}));
  });

  return Promise.all(promises);
};

export const fetchVehicleData = () => {

  return fetch(`${rootUrl}vehicles/`)
    .then(response => response.json())
    .then(vehicleData => cleanVehicleData(vehicleData));
};















