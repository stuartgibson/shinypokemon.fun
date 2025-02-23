import { BallType } from "src/types/ball.types";
import { GameType } from "src/types/game.types";
import { MethodType } from "src/types/method.types";
import { IPointEntities } from "store/reducers";

export const pointsData2017_9:IPointEntities = {
  '1da076ac-5004-471e-9774-a8fa8160e0c8': {
  data: {
    id: '1da076ac-5004-471e-9774-a8fa8160e0c8',
    type: 'point',
    attributes: {
      ball: null,
      catchDate: null,
      firstCatch: false,
      game: null,
      method: null,
      oldSystemPoint: true
    },
    relationships: {
      competition: {
        data: {
          id: '8747fcc1-1b22-4be4-8137-a6660bcae823',
          type: 'competition'
        }
      },
      player: {
        data: { id: 'ff4976ce-1519-4ad6-a124-eef49565fc58', type: 'player' }
      },
      pokemon: {
        data: { id: 'f77b6663-537d-469c-bd2f-0e4347bb5ca3', type: 'pokemon' }
      }
    }
  }
},
  'a249fb7b-88df-4f8f-a06e-065b5b107e72': {
  data: {
    id: 'a249fb7b-88df-4f8f-a06e-065b5b107e72',
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
          id: '8747fcc1-1b22-4be4-8137-a6660bcae823',
          type: 'competition'
        }
      },
      player: {
        data: { id: '3657e524-63a2-4eb6-b768-c20b104e41a1', type: 'player' }
      },
      pokemon: {
        data: { id: 'f77b6663-537d-469c-bd2f-0e4347bb5ca3', type: 'pokemon' }
      }
    }
  }
},
}