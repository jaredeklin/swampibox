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

export const fetchPlanetData = () => {

  return fetch("https://swapi.co/api/planets/")
    .then(response => response.json())
    .then(planetData => {
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
    })
    .then(updatedData => getResidents(updatedData))
}

const getResidents = (planetData) => {

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
  return fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then(vehicleData => cleanVehicleData(vehicleData))
}

const cleanVehicleData = (vehicleData) => {
  return vehicleData.results.reduce((vehicleArray, vehicle) => {
    const vehicleObj = {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      capacity: vehicle.passengers

    }
    return [...vehicleArray, vehicleObj]
  }, [])
}















