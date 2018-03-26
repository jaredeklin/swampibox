export const cleanPlanetData = (planetData) => {
  return planetData.results.reduce((planetArray, planet) => {
    const planetObj = {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    };

    return [...planetArray, planetObj];
  }, []);
};