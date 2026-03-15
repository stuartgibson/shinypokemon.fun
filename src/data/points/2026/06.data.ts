import { IPointEntities } from 'store/reducers';

export const pointsData2026_06: IPointEntities = {
  //  Beware the Ides of March 15 Mar 2026 to 28 Mar 2026
  //  Tone (@Tone)
  //  0767. Wimpod
  'e9042774-ba62-4060-b7f7-ac68bcb294ee': {
    data: {
      id: 'e9042774-ba62-4060-b7f7-ac68bcb294ee',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-03-15',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'f1bd38c6-211e-4696-a53f-fee0e8ac1953',
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
            id: '794f527e-ee32-4f4d-8b67-12fd54ec7a7b',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
