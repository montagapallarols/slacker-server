'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          name: "Full Metal Jacket",
          year: "1987",
          genre: "Drama, War",
          director: "Stanley Kubrick",
          plot: "A two-segment look at the effect of the military mindset and war itself on Vietnam era Marines. The first half follows a group of recruits in boot camp under the command of the punishing Gunnery Sergeant Hartman. The second half shows one of those recruits, Joker, covering the war as a correspondent for Stars and Stripes, focusing on the Tet offensive.",
          poster: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          type: "movie",
          apiId: "tt0093058",
          apiName: "omdb",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clerks",
          year: "1994",
          genre: "Comedy",
          director: "Kevin Smith",
          plot: "Dante Hicks is not having a good day. He works as a clerk in a small convenience store and is told to come into work on his day off. Dante thinks life is a series of down endings and this day is proving to no different. He reads in the newspaper that his ex-girlfriend Caitlin is getting married. His present girlfriend reveals to have somewhat more experience with sex that he ever imagined. His principal concerns are the hockey game he has that afternoon and the wake for a friend who died. His buddy Randal Graves works as a clerk in the video store next and he hates his job just about as much as Dante hates his.",
          poster: "https://m.media-amazon.com/images/M/MV5BNzE1Njk0NmItNDhlMC00ZmFlLWI4ZTUtYTY4ZjgzNjkyMTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          type: "movie",
          apiId: "tt0109445",
          apiName: "omdb",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moonrise Kingdom",
          year: "2012",
          genre: "Comedy, Drama, Romance",
          director: "Wes Anderson",
          plot: "Set on an island off the coast of New England in the 1960s, as a young boy and girl fall in love they are moved to run away together. Various factions of the town mobilize to search for them and the town is turned upside down - which might not be such a bad thing.",
          poster: "https://m.media-amazon.com/images/M/MV5BMzllMWI1ZDQtMmFhNS00NzJkLThmMTMtNzFmMmMyYjU3ZGVjXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
          type: "movie",
          apiId: "tt1748122",
          apiName: "omdb",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stand By Me",
          year: "1986",
          genre: "Adventure, Drama",
          director: "Rob Reiner",
          plot: "It's the summer of 1959 in Castlerock, Oregon and four 12 year-old boys - Gordie, Chris, Teddy and Vern - are fast friends. After learning of the general location of the body of a local boy who has been missing for several days, they set off into woods to see it. Along the way, they learn about themselves, the meaning of friendship and the need to stand up for what is right.",
          poster: "https://m.media-amazon.com/images/M/MV5BODJmY2Y2OGQtMDg2My00N2Q3LWJmZTUtYTc2ODBjZDVlNDlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          type: "movie",
          apiId: "tt0092005",
          apiName: "omdb",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Breaking Bad",
          year: "2008–2013",
          genre: "Crime, Drama, Thriller",
          director: "N/A",
          plot: "When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose. He lives with his teenage son, who has cerebral palsy, and his wife, in New Mexico. Determined to ensure that his family will have a secure future, Walt embarks on a career of drugs and crime. He proves to be remarkably proficient in this new world as he begins manufacturing and selling methamphetamine with one of his former students. The series tracks the impacts of a fatal diagnosis on a regular, hard working man, and explores how a fatal diagnosis affects his morality and transforms him into a major player of the drug trade.",
          poster: "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          type: "series",
          apiId: "tt0903747",
          apiName: "omdb",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
  }
};
