import { IPointEntities } from 'store/reducers';

export const pointsData2025_06: IPointEntities = {
  //  Owner‘s Pokémon 16 Mar 2025  to 29 Mar 2025
  //  Keagan (@Keagan)
  //  0843. Silicobra
  'f1c317f6-df1e-4966-9869-5838508a46c6': {
    data: {
      id: 'f1c317f6-df1e-4966-9869-5838508a46c6',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-03-16',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
      },
      relationships: {
        competition: {
          data: {
            id: '542bcd0a-f47d-4d8f-952f-f4fdffd7fc3f',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '1cf8acbd-c839-4319-9be7-3b7e8659bdf2',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: '353ea629-d1a0-4a1a-8ea9-c633a2588ad2',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
