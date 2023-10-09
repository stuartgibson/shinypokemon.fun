import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { MethodType } from "types/method.types";

export const pointsData2023_20:IPointEntities = {
  //  Fossils 1 Oct 2023  to 14 Oct 2023
  //  Padukes (@Padukes)
  //  0698. Amaura
  '5791a810-ef31-4b1e-9841-35ac2ac4c97e': {
    data: {
      id: '5791a810-ef31-4b1e-9841-35ac2ac4c97e',
      type: 'point',
      attributes: {
        ball: 'dive' as BallType,
        catchDate: '2023-10-03',
        firstCatch: true,
        game: null,
        method: 'breedMasuda' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '91828fa9-3e04-4bed-8924-466c7ba8bda2',
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
            id: 'abdf6272-a4b8-4395-8493-20745dfb1830',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Fossils 1 Oct 2023  to 14 Oct 2023
  //  james (@seginus)
  //  0140. Kabuto
  '7e8f5e5a-0e12-48f0-ab46-b26d2da81e3a': {
    data: {
      id: '7e8f5e5a-0e12-48f0-ab46-b26d2da81e3a',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-10-07',
        firstCatch: false,
        game: null,
        method: 'breedMasuda' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '91828fa9-3e04-4bed-8924-466c7ba8bda2',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: 'c159b074-9e9f-4e1b-889f-a64dd78598a6',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '79fbda43-7ad3-4907-a8ba-0af028f4ae5b',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
