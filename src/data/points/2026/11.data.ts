import { IPointEntities } from 'store/reducers';

export const pointsData2026_11: IPointEntities = {
  //  Holding Out for a Shiny 24 May 2026 to 6 Jun 2026
  //  Philip Starns (@Philip Starns)
  //  0295. Exploud
  '011bc8ca-2322-4332-b39f-6bff5689074f': {
    data: {
      id: '011bc8ca-2322-4332-b39f-6bff5689074f',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-05-25',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '56698df4-51ba-46bc-8529-126296528314',
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
            id: 'a6b4632a-11eb-4a38-9f5e-1abdad5781a8',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
