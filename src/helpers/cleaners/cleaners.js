export const cleanFilmData = (films) => {
  return films.results.reduce((filmData, episode) => {
    const filmObj = {
      title: episode.title,
      release: episode.release_date.slice(0, 4),
      openingCrawl: episode.opening_crawl,
    }

    return [...filmData, filmObj]
  }, [])  
}

export const cleanHomeWorldData = (homeWorldData, character) => {
  return {
    name: character.name,
    species: character.species, 
    homeworld: homeWorldData.name, 
    pop: homeWorldData.population
  }
}

export const cleanPlanetData = (planetData) => {
  return planetData.results.reduce((planetArray, planet) => {
    const planetObj = {
      name: planet.name,
      terrain: planet.terrain,
      pop: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }

    return [...planetArray, planetObj]
  }, [])    
}