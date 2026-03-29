import { IPointEntities } from 'store/reducers';

export const pointsData2026_07: IPointEntities = {
  //  A perfectly Normal Easter 29 Mar 2026 to 11 Apr 2026
  //  Stuart (@stuart)
  //  0661. Fletchling
  'a2e2c886-3bca-4766-b558-af48e0562a8f': {
    data: {
      id: 'a2e2c886-3bca-4766-b558-af48e0562a8f',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-03-29',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'f523cd66-eb97-4523-9a20-a90b4b63989c',
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
            id: '4cf0a1fb-d7f6-4a71-8d99-f711ab637626',
            type: 'pokemon',
          },
        },
      },
    },
  },
  //  A perfectly Normal Easter 29 Mar 2026 to 11 Apr 2026
  //  Christopher (@Christopher)
  //  0235. Smeargle
  '7b529431-44eb-4603-908e-66c552826219': {
    data: {
      id: '7b529431-44eb-4603-908e-66c552826219',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-03-29',
        firstCatch: false,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'f523cd66-eb97-4523-9a20-a90b4b63989c',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '264f7da7-e6d0-4a18-a216-df7233d13260',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: 'd19a4e77-6a74-496b-b7f7-9ad96e80d6e7',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
