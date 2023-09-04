import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";

export const pointsData2023_18:IPointEntities = {
  //  Unova 3 Sep 2023  to 16 Sep 2023
  //  Padukes (@Padukes)
  //  0535. Tympole
  'a637c0f0-b6ea-48b2-a755-772db9875678': {
    data: {
      id: 'a637c0f0-b6ea-48b2-a755-772db9875678',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-09-03',
        firstCatch: true,
        game: null,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '5df27819-b946-4a6e-ac9f-5a08b19ec822',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '1ca0b66b-2791-41c2-bf6d-aeabae1cfdb0',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'e83be142-50c0-481c-9495-843687cf7563',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
