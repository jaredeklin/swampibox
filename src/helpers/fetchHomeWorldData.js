import { cleanHomeWorldData } from './cleanHomeWorldData'

export const fetchHomeWorldData = (peopleData) => {

  const promises = peopleData.map(character => {

    return fetch(character.homeworld)
      .then(response => response.json())
      .then(homeWorldData => cleanHomeWorldData(homeWorldData, character))
      .catch(error => console.log('error'))
  })
  return Promise.all(promises)
}