import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";

export const pointsData2022_x = {
  '80c18b4d-8793-4bf6-889a-d33eb624ed07': {
    data: {
      type: 'point' as 'point',
      id: '80c18b4d-8793-4bf6-889a-d33eb624ed07',
      attributes: {
        ball: 'pokeball' as BallType,
        catchDate: '2022-09-19',
        game: 'omegaRuby' as GameType,
        method: 'horde' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '460d61da-4bcf-4392-8274-5a78817cf909',
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
            id: '7af0e968-d555-4acb-b030-8fdd64600615',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
