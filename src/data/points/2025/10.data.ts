import { IPointEntities } from 'store/reducers';

export const pointsData2025_10: IPointEntities = {
  //  Left on Read (by Game Freak) 11 May 2025  to 24 May 2025
  //  Stuart (@stuart)
  //  0793. Nihilego
  '518785ea-3a73-4e00-80aa-017a2ad200fb': {
    data: {
      id: '518785ea-3a73-4e00-80aa-017a2ad200fb',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-05-11',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'c19ff84e-240e-46a6-87b5-896cd32f3b60',
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
            id: '069b5315-2193-45b1-b5b7-94964232e3ce',
            type: 'pokemon',
          },
        },
      },
    },
  },
  //  Left on Read (by Game Freak) 11 May 2025  to 24 May 2025
  //  Tone (@Tone)
  //  0666. Vivillon
  '0a6fae18-f2cb-48ac-bf42-11cfce63466b': {
    data: {
      id: '0a6fae18-f2cb-48ac-bf42-11cfce63466b',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-05-11',
        firstCatch: false,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'c19ff84e-240e-46a6-87b5-896cd32f3b60',
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
            id: 'f1c992c4-d94d-42f4-add7-d16864cdea0f',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
