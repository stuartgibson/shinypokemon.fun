import { IPointEntities } from 'store/reducers';

export const pointsData2026_24: IPointEntities = {
  //  Double it and give it to the next guy 22 Nov 2026 to 5 Dec 2026
  //  Philip Starns (@Philip Starns)
  //  0690. Skrelp
  'faae8f8c-eb18-4ed1-b921-e605f3e903fa': {
    data: {
      id: 'faae8f8c-eb18-4ed1-b921-e605f3e903fa',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-11-22',
        firstCatch: false,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'd5bdfed7-ee97-44d8-9d8f-8a653cf92ed3',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: 'e7e5548f-6d09-421f-8f37-966949fe41b9',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: '0b4905b3-bd2f-4714-bbdb-c88474d52b6f',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
