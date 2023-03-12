import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_5 = {
  //  Pokémon that have been on a fighting type TCG card 5 Mar 2023  to 18 Mar 2023
  //  james (@seginus)
  //  0551. Sandile
  '8b2cfe7f-9061-4c45-bc1f-612ed8e57e35': {
    data: {
      id: '8b2cfe7f-9061-4c45-bc1f-612ed8e57e35',
      type: 'point' as 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-03-05',
        firstCatch: true,
        game: 'violet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '88110ed9-d8ca-4f5f-865d-8086b9349e29',
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
            id: 'fbd0d149-dbbe-4a22-a970-5821cb900ccc',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Pokémon that have been on a fighting type TCG card 5 Mar 2023  to 18 Mar 2023
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0075. Graveler
  'fdfe99f0-9153-4114-b58b-d50f1b9957b8': {
    data: {
      id: 'fdfe99f0-9153-4114-b58b-d50f1b9957b8',
      type: 'point' as 'point',
      attributes: {
        ball: 'gigaton' as BallType,
        catchDate: '2023-03-07',
        firstCatch: false,
        game: 'legendsArceus' as GameType,
        method: 'random' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '88110ed9-d8ca-4f5f-865d-8086b9349e29',
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
            id: '85a703ab-af6c-484a-9260-3300916af26d',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
