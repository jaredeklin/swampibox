export const cleanSpecies = (speciesData, character) => {

  return ({...character, species: speciesData.name});
};