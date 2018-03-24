import { cleanVehicleData } from './cleanVehicleData/cleanVehicleData';
import {
  cleanFilmData,
  cleanHomeWorldData,
  cleanPlanetData,
} from './cleaners/cleaners';

const rootUrl = 'https://swapi.co/api/';

export const fetchFilmData = () => {
  return fetch(`${rootUrl}films/`)
    .then(response => response.json())
    .then(filmData => cleanFilmData(filmData))
}

export const fetchPeopleData = () => {
  return fetch(`${rootUrl}people/`)
    .then(response => response.json())
    .then(peoplesData => fetchHomeworldData(peoplesData.results))
    .then(updatedData => fetchSpecies(updatedData))  }

export const fetchHomeworldData = (peopleData) => {
  const promises = peopleData.map(character => {

    return fetch(character.homeworld)
      .then(response => response.json())
      .then(homeWorldData => cleanHomeWorldData(homeWorldData, character))
  })
  return Promise.all(promises)
}

export const fetchSpecies = (updatedData) => {
  const promises = updatedData.map((character) => {

    return fetch(character.species)
     .then(response => response.json())
     .then(speciesData => ({...character, species: speciesData.name}))
  })

  return Promise.all(promises)
}

export const fetchPlanetData = () => {

  return fetch(`${rootUrl}planets/`)
    .then(response => response.json())
    .then(planetData => cleanPlanetData(planetData))
    .then(updatedData => fetchResidents(updatedData))
    
}



// const getName (names) => {
//   //turn residentNames from array to string
// }

const fetchResidents = (planetData) => {

  const promises = planetData.map(planet => {

    const inhabitants = planet.residents.map(resident => {

      return fetch(resident)
        .then(response => response.json())
        .then(residentData => residentData.name)
    })
    
    return Promise.all(inhabitants)
      .then(residentNames => ({...planet, residents: residentNames}))
  })

  return Promise.all(promises)
}

export const fetchVehicleData = () => {

  return fetch(`${rootUrl}vehicles/`)
    .then(response => response.json())
    .then(vehicleData => cleanVehicleData(vehicleData))
}

// export const cleanVehicleData = (vehicleData) => {
//   return vehicleData.results.reduce((vehicleArray, vehicle) => {
//     const vehicleObj = {
//       name: vehicle.name,
//       model: vehicle.model,
//       class: vehicle.vehicle_class,
//       capacity: vehicle.passengers
//     }
//     return [...vehicleArray, vehicleObj]
//   }, [])
// }















