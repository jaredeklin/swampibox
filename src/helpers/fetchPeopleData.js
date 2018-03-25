import { fetchSpecies } from './fetchSpecies'
import { fetchHomeWorldData } from './fetchHomeWorldData'
const rootUrl = 'https://swapi.co/api/';

export const fetchPeopleData = () => {
  return fetch(`${rootUrl}people/`)
    .then(response => response.json())
    .then(peoplesData => fetchHomeWorldData(peoplesData.results))
    .then(updatedData => fetchSpecies(updatedData)) 
}