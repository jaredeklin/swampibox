import { cleanSpecies } from './cleanSpecies';

export const fetchSpecies = (updatedData) => {

  const promises = updatedData.map((character) => {

    return fetch(character.species)
      .then(response => response.json())
      .then(speciesData => cleanSpecies(speciesData, character));
  });

  return Promise.all(promises);
};

