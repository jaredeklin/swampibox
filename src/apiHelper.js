export const fetchFilmData = () => {

  return fetch('https://swapi.co/api/films/')
}

export const cleanFilmData = (films) => {
  return films.results.reduce((filmData, episode) => {
    const filmObj = {
      title: episode.title,
      release: episode.release_date,
      openingCrawl: episode.opening_crawl,
    }

    return [...filmData, filmObj]
  }, [])  
}

export const fetchPeopleData = () => {
    return fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(peoplesData => fetchPlanet(peoplesData.results))
      .then(updatedData => fetchSpecies(updatedData))
      
    }

const fetchPlanet = (peopleData) => {
    const promises = peopleData.map(character => {

      return fetch(character.homeworld)
        .then(response => response.json())
        .then(homeWorldData => ({
          name: character.name,
          species: character.species, 
          homeworld: homeWorldData.name, 
          pop: homeWorldData.population
        }))
    })
  return Promise.all(promises)
}

const fetchSpecies = (updatedData) => {
  const promises = updatedData.map((character) => {

    return fetch(character.species)
     .then(response => response.json())
     .then(speciesData => ({...character, species: speciesData.name}))
  })

  return Promise.all(promises)
}

