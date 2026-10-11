import { IPointEntities } from 'store/reducers';

export const pointsData2026_21: IPointEntities = {
  //  Bank Shutdown 11 Oct 2026 to 24 Oct 2026
  //  Philip Starns (@Philip Starns)
  //  0586. Sawsbuck
  'b3d95853-5254-4d63-8af7-a43787b6f397': {
    data: {
      id: 'b3d95853-5254-4d63-8af7-a43787b6f397',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-10-11',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '6252e9b4-d427-4505-aa90-ff991b36b1d4',
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
            id: '147eebec-bc96-4ee9-b4dd-3f0a3fc93d91',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
