import { IPointEntities } from 'store/reducers';

export const pointsData2026_09: IPointEntities = {
  //  Pokopia 26 Apr 2026 to 9 May 2026
  //  Tone (@Tone)
  //  0969. Glimmet
  'fc7dada9-7b46-4bef-b9eb-014cafab9d7b': {
    data: {
      id: 'fc7dada9-7b46-4bef-b9eb-014cafab9d7b',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-04-26',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '77546964-8743-4092-9de8-4f84823adc2d',
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
            id: '448daffc-668f-4476-b6e4-19111c496573',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
