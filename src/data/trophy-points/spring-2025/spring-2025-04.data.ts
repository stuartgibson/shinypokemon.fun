import { IPointEntities } from 'store/reducers';

export const trophyPointsDataSpring2025_04: IPointEntities = {
  //  Left on Read (by Game Freak) 11 May 2025  to 24 May 2025
  //  AverageSiege (@AverageSiege)
  //  0201. Unown
  '5fae4c9e-3efd-40ca-95ee-1a845cd68566': {
    data: {
      id: '5fae4c9e-3efd-40ca-95ee-1a845cd68566',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-05-14',
        firstCatch: false,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 3,
      },
      relationships: {
        competition: {
          data: {
            id: 'c19ff84e-240e-46a6-87b5-896cd32f3b60',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '70dac14a-0f44-42a1-afb2-1846a6663d0c',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: 'c47787a9-7b74-4f4b-93e9-e0836ef7cd28',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
