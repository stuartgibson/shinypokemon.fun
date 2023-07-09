import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_14:IPointEntities = {
  //  No Hands or Feet 9 Jul 2023  to 22 Jul 2023
  //  Tone (@Tone)
  //  0968. Orthworm
  'b3939da7-76e4-4bd4-bc00-efaa2b47c5c2': {
    data: {
      id: 'b3939da7-76e4-4bd4-bc00-efaa2b47c5c2',
      type: 'point',
      attributes: {
        ball: 'dive' as BallType,
        catchDate: '2023-07-09',
        firstCatch: true,
        game: 'violet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '9c7535c6-7bf5-4c7b-b687-53b4e81f92dd',
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
            id: '4fff0c25-e12a-4d29-8880-a76dc2b1cc77',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
