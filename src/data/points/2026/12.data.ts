import { IPointEntities } from 'store/reducers';

export const pointsData2026_12: IPointEntities = {
  //  Bug Hunting Competition 7 Jun 2026 to 20 Jun 2026
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0167. Spinarak
  'a3a55ef9-d985-4204-abc0-9e99ac6813e7': {
    data: {
      id: 'a3a55ef9-d985-4204-abc0-9e99ac6813e7',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-06-07',
        firstCatch: true,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'cd955abc-9d99-46db-9512-b48e11fd5988',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '1e665730-88cd-4ca3-b03c-961c3a71e749',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: '16b77d80-6e39-4faf-a51d-0f218fbdc1d0',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
