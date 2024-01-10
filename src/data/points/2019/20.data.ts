import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";
import { IPointEntities } from "store/reducers";

export const pointsData2019_20:IPointEntities = {
  '6c034bc7-9817-4bb0-a5f8-18cd7417ced6': {
  data: {
    id: '6c034bc7-9817-4bb0-a5f8-18cd7417ced6',
    type: 'point',
    attributes: {
      ball: null,
      catchDate: null,
      firstCatch: true,
      game: null,
      method: null
    },
    relationships: {
      competition: {
        data: {
          id: 'b01b1bce-a2f1-405b-9e4a-9ffed74253d1',
          type: 'competition'
        }
      },
      player: {
        data: { id: '3657e524-63a2-4eb6-b768-c20b104e41a1', type: 'player' }
      },
      pokemon: {
        data: { id: '24e010f3-7f1e-49c0-a63f-5e1605d5b8ff', type: 'pokemon' }
      }
    }
  }
},
}