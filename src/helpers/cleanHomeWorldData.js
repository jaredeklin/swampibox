export const cleanHomeWorldData = (homeWorldData, character) => {
  return {
    name: character.name,
    species: character.species, 
    homeworld: homeWorldData.name, 
    pop: homeWorldData.population
  }
}