import { IPointEntities } from 'store/reducers';

export const pointsData2025_05: IPointEntities = {
  //  2/3rds Johto (and Tepig) 2 Mar 2025  to 15 Mar 2025
  //  Bobby De Walt (@Bobby)
  //  0123. Scyther
  'f2d505e4-78e5-44b3-9173-d139ef24c59d': {
    data: {
      id: 'f2d505e4-78e5-44b3-9173-d139ef24c59d',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-03-02',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
      },
      relationships: {
        competition: {
          data: {
            id: 'baab4caa-cf5d-4791-bff3-424c8777e8a3',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: 'a3abfccd-9cb0-422a-b3f3-aceb26f8b678',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: 'f6e13a94-bcb0-4747-8c0e-cf45331cff80',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
