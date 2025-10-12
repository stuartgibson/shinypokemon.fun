import { IPointEntities } from 'store/reducers';

export const pointsData2025_21: IPointEntities = {
  //  Catch Fliers, Not Feelings. 12 Oct 2025  to 25 Oct 2025
  //  Stuart (@stuart)
  //  0357. Tropius
  '2a368c2d-7d4f-4965-858f-354b3a24ccb6': {
    data: {
      id: '2a368c2d-7d4f-4965-858f-354b3a24ccb6',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-10-12',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '002a91b3-a2f3-465a-a2f6-062b4539583c',
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
            id: 'd89bcb1c-7129-483b-9ff4-6de0b5566505',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
