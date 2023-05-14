import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_10:IPointEntities = {
  //  Starters 14 May 2023  to 27 May 2023
  //  Tone (@Tone)
  //  0390. Chimchar
  'bbd429c6-238e-4bd6-973d-fbcbe298b42f': {
    data: {
      id: 'bbd429c6-238e-4bd6-973d-fbcbe298b42f',
      type: 'point',
      attributes: {
        ball: 'ultraHisui' as BallType,
        catchDate: '2023-05-14',
        firstCatch: true,
        game: 'legendsArceus' as GameType,
        method: 'outbreakLegendsArceus' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '041c4b7b-850c-46d6-8c94-0e179ee00ff3',
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
            id: '27c6fafd-8273-4951-a5e1-8c7727a16333',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
