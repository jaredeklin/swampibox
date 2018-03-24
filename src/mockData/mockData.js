export const mockVehicleData = {
  "count": 39,
  "next": "https://swapi.co/api/vehicles/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled",
      "pilots": [],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T15:36:25.724000Z",
      "edited": "2014-12-22T18:21:15.523587Z",
      "url": "https://swapi.co/api/vehicles/4/"
    }
  ]
};

export const finalVehicleData = [{
  "capacity": "30",
  "class": "wheeled",
  "model": "Digger Crawler", 
  "name": "Sand Crawler"
}];

export const mockFilmData = {
  "count": 7,
  "next": null,
  "previous": null,
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/8/",
        "https://swapi.co/api/people/9/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/12/",
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/15/",
        "https://swapi.co/api/people/16/",
        "https://swapi.co/api/people/18/",
        "https://swapi.co/api/people/19/",
        "https://swapi.co/api/people/81/"
      ],
      "planets": [
        "https://swapi.co/api/planets/2/",
        "https://swapi.co/api/planets/3/",
        "https://swapi.co/api/planets/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/2/",
        "https://swapi.co/api/starships/3/",
        "https://swapi.co/api/starships/5/",
        "https://swapi.co/api/starships/9/",
        "https://swapi.co/api/starships/10/",
        "https://swapi.co/api/starships/11/",
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/13/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/4/",
        "https://swapi.co/api/vehicles/6/",
        "https://swapi.co/api/vehicles/7/",
        "https://swapi.co/api/vehicles/8/"
      ],
      "species": [
        "https://swapi.co/api/species/5/",
        "https://swapi.co/api/species/3/",
        "https://swapi.co/api/species/2/",
        "https://swapi.co/api/species/1/",
        "https://swapi.co/api/species/4/"
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2015-04-11T09:46:52.774897Z",
      "url": "https://swapi.co/api/films/1/"
    }]  
}

export const expectedFilmData = [{
  title: "A New Hope", 
  release: "1977", 
  openingCrawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
}]









    