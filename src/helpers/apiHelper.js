import { cleanVehicleData } from './cleanVehicleData';
import { cleanFilmData } from './cleanFilmData';
import { cleanHomeWorldData } from './cleanHomeWorldData';
import { cleanPlanetData } from './cleanPlanetData';
import { fetchPeopleData } from './fetchPeopleData'
const rootUrl = 'https://swapi.co/api/';

export const fetchFilmData = () => {
  return fetch(`${rootUrl}films/`)
    .then(response => response.json())
    .then(filmData => cleanFilmData(filmData))
    .catch(error => console.log('error')) 
}

export const fetchPlanetData = () => {

  return fetch(`${rootUrl}planets/`)
    .then(response => response.json())
    .then(planetData => cleanPlanetData(planetData))
    .then(updatedData => fetchResidents(updatedData))
    .catch(error => console.log('error'))   
}

export const fetchResidents = (planetData) => {

  const promises = planetData.map(planet => {

    const inhabitants = planet.residents.map(resident => {

      return fetch(resident)
        .then(response => response.json())
        .then(residentData => residentData.name)
        .catch(error => console.log('error'))
    })
    
    return Promise.all(inhabitants)
      .then(residentNames => ({...planet, residents: residentNames.join(', ')}))
      .catch(error => console.log('error'))
  })

  return Promise.all(promises)
}

export const fetchVehicleData = () => {

  return fetch(`${rootUrl}vehicles/`)
    .then(response => response.json())
    .then(vehicleData => cleanVehicleData(vehicleData))
    .catch(error => console.log('error'))
}















