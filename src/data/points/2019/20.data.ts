import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";
import { IPointEntities } from "store/reducers";

export const pointsData2019_20:IPointEntities = {
  '638aacfa-e280-4f87-b96b-5b45fcc4baf5': {
  data: {
    id: '638aacfa-e280-4f87-b96b-5b45fcc4baf5',
    type: 'point',
    attributes: {
      ball: null,
      catchDate: null,
      firstCatch: true,
      game: null,
      method: null,
      oldSystemPoint: true
    },
    relationships: {
      competition: {
        data: {
          id: 'f695d6b1-a0ee-4479-b1ca-1668a8ce4e79',
          type: 'competition'
        }
      },
      player: {
        data: { id: '3657e524-63a2-4eb6-b768-c20b104e41a1', type: 'player' }
      },
      pokemon: {
        data: { id: '2b3bdf14-d2fe-491b-857b-b6b973cc5d27', type: 'pokemon' }
      }
    }
  }
},
}