/* eslint-disable */

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

export const mockPeopleData = {
    "count": 87, 
    "next": "https://swapi.co/api/people/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/14/", 
                "https://swapi.co/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.co/api/people/1/"
        }
      ]
}

export const mockGetHomeWorldData = [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/14/", 
                "https://swapi.co/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.co/api/people/1/"
        }
]

export const mockPlanetData = {
    "name": "Tatooine", 
    "rotation_period": "23", 
    "orbital_period": "304", 
    "diameter": "10465", 
    "climate": "arid", 
    "gravity": "1 standard", 
    "terrain": "desert", 
    "surface_water": "1", 
    "population": "200000", 
    "residents": [
        "https://swapi.co/api/people/1/", 
        // "https://swapi.co/api/people/2/", 
        // "https://swapi.co/api/people/4/", 
        // "https://swapi.co/api/people/6/", 
        // "https://swapi.co/api/people/7/", 
        // "https://swapi.co/api/people/8/", 
        // "https://swapi.co/api/people/9/", 
        // "https://swapi.co/api/people/11/", 
        // "https://swapi.co/api/people/43/", 
        // "https://swapi.co/api/people/62/"
    ], 
    "films": [
        "https://swapi.co/api/films/5/", 
        "https://swapi.co/api/films/4/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/"
    ], 
    "created": "2014-12-09T13:50:49.641000Z", 
    "edited": "2014-12-21T20:48:04.175778Z", 
    "url": "https://swapi.co/api/planets/1/"
}

export const mockAllPlanetData = {
    "count": 61, 
    "next": "https://swapi.co/api/planets/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000", 
            "residents": [
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/68/", 
                "https://swapi.co/api/people/81/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z", 
            "url": "https://swapi.co/api/planets/2/"
        }
      ]
}

export const expectedCleanPlanetData = [{
  "climate": "temperate", 
  "name": "Alderaan", 
  "pop": "2000000000", 
  "residents": [
    "https://swapi.co/api/people/5/", 
    "https://swapi.co/api/people/68/", 
    "https://swapi.co/api/people/81/"], 
  "terrain": "grasslands, mountains"
}]

export const mockPersonData = {
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.co/api/planets/1/", 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/", 
        "https://swapi.co/api/films/7/"
    ], 
    "species": [
        "https://swapi.co/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.co/api/vehicles/14/", 
        "https://swapi.co/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.co/api/starships/12/", 
        "https://swapi.co/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.co/api/people/1/"
}

export const expectedCleanHomeWorld = {
  "homeworld": "Tatooine", 
  "name": "Luke Skywalker", 
  "pop": "200000", 
  "species": ["https://swapi.co/api/species/1/"]
}

export const mockCharacterDataObj = {
  "homeworld": "Tatooine", 
  "name": "Luke Skywalker", 
  "pop": "200000", 
  "species": ["https://swapi.co/api/species/1/"]
}

export const mockCharacterDataArray = [{
  "homeworld": "Tatooine", 
  "name": "Luke Skywalker", 
  "pop": "200000", 
  "species": ["https://swapi.co/api/species/1/"]
}];

export const mockSpeciesData = {
    "name": "Human", 
    "classification": "mammal", 
    "designation": "sentient", 
    "average_height": "180", 
    "skin_colors": "caucasian, black, asian, hispanic", 
    "hair_colors": "blonde, brown, black, red", 
    "eye_colors": "brown, blue, green, hazel, grey, amber", 
    "average_lifespan": "120", 
    "homeworld": "https://swapi.co/api/planets/9/", 
    "language": "Galactic Basic", 
    "people": [
        "https://swapi.co/api/people/1/", 
        "https://swapi.co/api/people/4/", 
        "https://swapi.co/api/people/5/", 
        "https://swapi.co/api/people/6/", 
        "https://swapi.co/api/people/7/", 
        "https://swapi.co/api/people/9/", 
        "https://swapi.co/api/people/10/", 
        "https://swapi.co/api/people/11/", 
        "https://swapi.co/api/people/12/", 
        "https://swapi.co/api/people/14/", 
        "https://swapi.co/api/people/18/", 
        "https://swapi.co/api/people/19/", 
        "https://swapi.co/api/people/21/", 
        "https://swapi.co/api/people/22/", 
        "https://swapi.co/api/people/25/", 
        "https://swapi.co/api/people/26/", 
        "https://swapi.co/api/people/28/", 
        "https://swapi.co/api/people/29/", 
        "https://swapi.co/api/people/32/", 
        "https://swapi.co/api/people/34/", 
        "https://swapi.co/api/people/43/", 
        "https://swapi.co/api/people/51/", 
        "https://swapi.co/api/people/60/", 
        "https://swapi.co/api/people/61/", 
        "https://swapi.co/api/people/62/", 
        "https://swapi.co/api/people/66/", 
        "https://swapi.co/api/people/67/", 
        "https://swapi.co/api/people/68/", 
        "https://swapi.co/api/people/69/", 
        "https://swapi.co/api/people/74/", 
        "https://swapi.co/api/people/81/", 
        "https://swapi.co/api/people/84/", 
        "https://swapi.co/api/people/85/", 
        "https://swapi.co/api/people/86/", 
        "https://swapi.co/api/people/35/"
    ], 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/7/", 
        "https://swapi.co/api/films/5/", 
        "https://swapi.co/api/films/4/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/"
    ], 
    "created": "2014-12-10T13:52:11.567000Z", 
    "edited": "2015-04-17T06:59:55.850671Z", 
    "url": "https://swapi.co/api/species/1/"
};

export const expectedPeopleData = {
  name: "Luke Skywalker", 
  species: "Human", 
  homeworld: "Tatooine", 
  pop: "200000"
};

export const mockResidentData = [
  "https://swapi.co/api/people/5/", 
  "https://swapi.co/api/people/68/", 
  "https://swapi.co/api/people/81/"
]









    