import { IPointEntities } from 'store/reducers';

export const pointsData2025_24: IPointEntities = {
  //  The Hover Mons 23 Nov 2025  to 6 Dec 2025
  //  Tone (@Tone)
  //  0679. Honedge
  '31291d15-cb0d-41e0-962c-f885e27745f4': {
    data: {
      id: '31291d15-cb0d-41e0-962c-f885e27745f4',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-11-23',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '41d0c8e7-5768-47d0-a4b5-72d32f049efd',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '6b7a4cdb-fd7b-448c-9f03-2b49b4ab3b9d',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: '0633d25c-8f26-4049-8403-407ff49b7a1d',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
