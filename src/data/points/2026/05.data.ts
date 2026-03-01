import { IPointEntities } from 'store/reducers';

export const pointsData2026_05: IPointEntities = {
  //  Pokémon Presents 1 Mar 2026 to 14 Mar 2026
  //  Stuart (@stuart)
  //  0694. Helioptile
  '1d17c0e7-91b3-4e30-859f-7b0f5007181f': {
    data: {
      id: '1d17c0e7-91b3-4e30-859f-7b0f5007181f',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-03-01',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '93762b92-6891-44fa-af8a-db2ac80160f6',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '80cfecae-ef2e-437b-bb94-f0309ee3b3d2',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: 'f80c2650-1a54-4f56-ab46-c32cd59ef146',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
