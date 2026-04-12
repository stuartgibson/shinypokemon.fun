import { IPointEntities } from 'store/reducers';

export const pointsData2026_08: IPointEntities = {
  //  We are the Champions 12 Apr 2026 to 25 Apr 2026
  //  Deathrite (@Deathrite)
  //  0884. Duraludon
  'dc13487f-dba5-48ef-8ef9-1c10cb97addd': {
    data: {
      id: 'dc13487f-dba5-48ef-8ef9-1c10cb97addd',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-04-12',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '6c77db3f-9ccf-4c42-b0e2-8860f561ca7b',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '2123e057-079c-42d2-b9d6-a15dfef99a51',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: 'ece1a260-dacb-4e7f-84a0-6f0b92c6fcbf',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
