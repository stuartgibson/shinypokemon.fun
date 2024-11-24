import { IPointEntities } from 'store/reducers';

export const pointsData2024_24: IPointEntities = {
  //  Pokémon that learn the move Blizzard 24 Nov 2024  to 7 Dec 2024
  //  james (@seginus)
  //  0007. Squirtle
  'd4d25fb3-b050-49b8-83a1-5a80ddfb8b9a': {
    data: {
      id: 'd4d25fb3-b050-49b8-83a1-5a80ddfb8b9a',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2024-11-24',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
      },
      relationships: {
        competition: {
          data: {
            id: '9cb21b45-d302-49ef-b2dd-507be2af43ec',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: 'c159b074-9e9f-4e1b-889f-a64dd78598a6',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: '75c0ff1b-c295-427c-87fc-e3d95d9baa2b',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
