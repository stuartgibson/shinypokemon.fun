import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_4 = {
 //  Base Stats Over 500 19 Feb 2023  to 4 Mar 2023
  //  Nama Chibitty (@NamaTheNerd)
  //  0692. Clauncher
  'd8a5ffc7-b4e3-4f0a-bbc7-ec91ced9df18': {
    data: {
      id: 'd8a5ffc7-b4e3-4f0a-bbc7-ec91ced9df18',
      type: 'point',
      attributes: {
        ball: 'ultra' as BallType,
        catchDate: '2023-02-19',
        firstCatch: true,
        game: 'x' as GameType,
        method: 'chainFish' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '1cf610c6-c557-4ae5-9493-83a25187ecee',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: 'cfedba07-3cbe-4825-8c40-8623c2b89e31',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '5ec37ba4-83a7-4d40-bbf6-212d324686fe',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Base Stats Over 500 19 Feb 2023  to 4 Mar 2023
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0095. Onix
  'c62f9719-15b4-4b98-bdec-2f0a4256d4e1': {
    data: {
      id: 'c62f9719-15b4-4b98-bdec-2f0a4256d4e1',
      type: 'point',
      attributes: {
        ball: 'ultra' as BallType,
        catchDate: '2023-02-19',
        firstCatch: false,
        game: 'pogo' as GameType,
        method: 'pogoResearch' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '1cf610c6-c557-4ae5-9493-83a25187ecee',
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
            id: 'e6b8fffd-c432-4df7-85ba-4b8f88593ba7',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Base Stats Over 500 19 Feb 2023  to 4 Mar 2023
  //  james (@seginus)
  //  1005. Roaring Moon
  '1549bb1e-10c3-45c5-8e47-dfd00e6c53ca': {
    data: {
      id: '1549bb1e-10c3-45c5-8e47-dfd00e6c53ca',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-02-19',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '1cf610c6-c557-4ae5-9493-83a25187ecee',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: 'c159b074-9e9f-4e1b-889f-a64dd78598a6',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'c291dd7a-074f-4a64-831d-e759beedb893',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
