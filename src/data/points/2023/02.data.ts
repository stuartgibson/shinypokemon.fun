import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";

export const pointsData2023_2 = {
  //  Pokemon with weird evolution methods!!! 22 Jan 2023  to 28 Jan 2023
  //  Kathryn (@SteeleTheWin)
  //  0206. Dunsparce
  '99c4e6e2-819a-438f-b2e1-cefdd3f3adee': {
    data: {
      id: '99c4e6e2-819a-438f-b2e1-cefdd3f3adee',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-01-22',
        firstCatch: true,
        game: 'violet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: 'd529e41e-e273-4a6d-9ace-21516a6b8c2d',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: 'ec689f25-fffe-4249-b89d-603d574bacee',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '41115700-66dd-40bf-a5bf-a8b1949b537b',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Pokemon with weird evolution methods!!! 22 Jan 2023  to 28 Jan 2023
  //  Tone (@Tone)
  //  0220. Swinub
  '5c6c24c2-7046-4a43-9ace-14ffbf7c0db2': {
    data: {
      id: '5c6c24c2-7046-4a43-9ace-14ffbf7c0db2',
      type: 'point',
      attributes: {
        ball: 'ultraHisui' as BallType,
        catchDate: '2023-01-22',
        firstCatch: false,
        game: 'legendsArceus' as GameType,
        method: 'outbreakLegendsArceus' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: 'd529e41e-e273-4a6d-9ace-21516a6b8c2d',
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
            id: '9dfb92df-d030-412c-9833-d5406c3051e3',
            type: 'pokemon'
          }
        }
      }
    }
  }

}
