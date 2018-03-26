export const fetchResidents = (planetData) => {

  const promises = planetData.map(planet => {

    const inhabitants = planet.residents.map(resident => {

      return fetch(resident)
        .then(response => response.json())
        .then(residentData => residentData.name);
    });
    
    return Promise.all(inhabitants)
      .then(residentNames => (
        {...planet, residents: residentNames.join(', ')}));
  });

  return Promise.all(promises);
};