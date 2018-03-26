export const cleanHomeWorldData = (homeWorldData, character) => {
  return {
    name: character.name,
    species: character.species, 
    homeworld: homeWorldData.name, 
    population: homeWorldData.population
  };
};