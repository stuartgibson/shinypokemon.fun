import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";

export const pointsData2023 = {
  '': {
    data: {
      type: 'point',
      id: '',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-01-08',
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: 'f0e61570-110a-4413-8c1f-f68beb482279',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '3be16e09-d7c4-4ea5-a5bc-8fb3366355b6',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '7af0e968-d555-4acb-b030-8fdd64600615',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
