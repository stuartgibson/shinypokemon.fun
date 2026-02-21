import { IPointEntities } from 'store/reducers';

export const pointsData2026_05: IPointEntities = {
  //  Pokémon 30's 15 Feb 2026  to 7 Mar 2026
  //  Philip Starns (@Philip Starns)
  //  0300. Skitty
  'f25a540f-1f30-43aa-bbba-78dcd5b0a1bf': {
    data: {
      id: 'f25a540f-1f30-43aa-bbba-78dcd5b0a1bf',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2026-02-21',
        firstCatch: false,
        game: 'brilliantDiamond',
        method: 'radarDPPt',
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '50cdc4fb-4be4-4b6e-93b5-dd497b1f47c4',
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
            id: '89d387dd-40b4-4323-9511-05bf19ec2c6c',
            type: 'pokemon',
          },
        },
      },
    },
  },
};
