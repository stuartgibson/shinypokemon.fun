import { IPointEntities } from 'store/reducers';

export const trophyPointsDataSpring2025_03: IPointEntities = {
  //  Version Exclusives 27 Apr 2025  to 10 May 2025
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0129. Magikarp
  'a0101b55-f652-4f93-be25-1ebfa6bcaf70': {
    data: {
      id: 'a0101b55-f652-4f93-be25-1ebfa6bcaf70',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2025-05-06',
        firstCatch: false,
        game: null,
        method: null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: 'ff06de8e-1ace-46b9-bf72-b424df00229e',
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
            id: '494c864d-773a-4707-8aec-a26e87c8f3a6',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
