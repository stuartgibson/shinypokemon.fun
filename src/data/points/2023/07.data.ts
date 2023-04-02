import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_7:IPointEntities = {
//  Ash's Pokémon 2 Apr 2023  to 15 Apr 2023
  //  Al McKinlay (@Al)
  //  0231. Phanpy
  '60e5ceaf-f6d5-444e-b830-5a6a320399eb': {
    data: {
      id: '60e5ceaf-f6d5-444e-b830-5a6a320399eb',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-04-02',
        firstCatch: true,
        game: 'scarlet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '4e1a2095-e7ac-4cd4-ba39-026599c7102b',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: 'ff4976ce-1519-4ad6-a124-eef49565fc58',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '5a1de7c3-bcb3-4eb9-8365-e45e404bb023',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Ash's Pokémon 2 Apr 2023  to 15 Apr 2023
  //  Tone (@Tone)
  //  0701. Hawlucha
  'd1331d80-65f6-46d0-8cf4-07b5829c7917': {
    data: {
      id: 'd1331d80-65f6-46d0-8cf4-07b5829c7917',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-04-02',
        firstCatch: false,
        game: 'violet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '4e1a2095-e7ac-4cd4-ba39-026599c7102b',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '6b7a4cdb-fd7b-448c-9f03-2b49b4ab3b9d',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'bf992efa-c8dc-4eee-a2bd-5ba86e2d7feb',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Ash's Pokémon 2 Apr 2023  to 15 Apr 2023
  //  Tone (@Tone)
  //  0447. Riolu
  '6b24120c-c4ee-4c60-9238-87c78c64f883': {
    data: {
      id: '6b24120c-c4ee-4c60-9238-87c78c64f883',
      type: 'point',
      attributes: {
        ball: 'quick' as BallType,
        catchDate: '2023-04-02',
        firstCatch: false,
        game: 'violet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '4e1a2095-e7ac-4cd4-ba39-026599c7102b',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '6b7a4cdb-fd7b-448c-9f03-2b49b4ab3b9d',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '3063a957-dd1c-4941-8b37-d0984899515b',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Ash's Pokémon 2 Apr 2023  to 15 Apr 2023
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0164. Noctowl
  '02c02aac-41e5-41a3-b46d-b81e505b8e4f': {
    data: {
      id: '02c02aac-41e5-41a3-b46d-b81e505b8e4f',
      type: 'point',
      attributes: {
        ball: 'moon' as BallType,
        catchDate: '2023-04-02',
        firstCatch: false,
        game: '—' as GameType,
        method: 'sos' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '4e1a2095-e7ac-4cd4-ba39-026599c7102b',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '1e665730-88cd-4ca3-b03c-961c3a71e749',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '3dcca20d-cdd6-4855-b12b-34796c3ac420',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
