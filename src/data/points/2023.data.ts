import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";

export const pointsData2023 = {
  'c9d83409-7878-4f03-8c3a-1595f909b023': {
    data: {
      type: 'point',
      id: 'c9d83409-7878-4f03-8c3a-1595f909b023',
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
            id: '699b6e0f-4d02-41ff-a2a9-0f562153861e',
            type: 'pokemon'
          }
        }
      }
    }
  },
  '9af5b08d-fb03-49dd-b579-665ec821cfa0': {
    data: {
      type: 'point',
      id: '9af5b08d-fb03-49dd-b579-665ec821cfa0',
      attributes: {
        ball: 'ultra' as BallType,
        catchDate: '2023-01-08',
        game: 'pogo' as GameType,
        method: 'pogoRandom' as MethodType
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
            id: '6b7a4cdb-fd7b-448c-9f03-2b49b4ab3b9d',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '6aa962cb-3176-426d-9a74-f257c805b641',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
