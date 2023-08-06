import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_16:IPointEntities = {
  //  Fruit & Veg 6 Aug 2023  to 19 Aug 2023
  //  Stuart (@stuart)
  //  0986. Brute Bonnet
  'f1192e24-ec24-4088-b105-c109868654e8': {
    data: {
      id: 'f1192e24-ec24-4088-b105-c109868654e8',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-08-06',
        firstCatch: true,
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '9962c05a-7cb0-4d1a-9cae-02731d8aeac2',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '80cfecae-ef2e-437b-bb94-f0309ee3b3d2',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '049b64b0-42a8-47b0-983b-a0bddbac6e03',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Fruit & Veg 6 Aug 2023  to 19 Aug 2023
  //  Stuart (@stuart)
  //  0951. Capsakid
  '42b843c7-7203-46f7-b78c-b52a7e491865': {
    data: {
      id: '42b843c7-7203-46f7-b78c-b52a7e491865',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-08-06',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '9962c05a-7cb0-4d1a-9cae-02731d8aeac2',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '80cfecae-ef2e-437b-bb94-f0309ee3b3d2',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'a387d04d-c518-4e1f-821d-aca25f301019',
            type: 'pokemon'
          }
        }
      }
    }
  },
    //  Fruit & Veg 6 Aug 2023  to 19 Aug 2023
  //  Stuart (@stuart)
  //  0187. Hoppip
  '4a392f20-8b5d-4a10-9d2e-5987365495dc': {
    data: {
      id: '4a392f20-8b5d-4a10-9d2e-5987365495dc',
      type: 'point',
      attributes: {
        ball: 'pokeball' as BallType,
        catchDate: '2023-08-06',
        firstCatch: false,
        game: 'pogo' as GameType,
        method: 'pogoRandom' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '9962c05a-7cb0-4d1a-9cae-02731d8aeac2',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '80cfecae-ef2e-437b-bb94-f0309ee3b3d2',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '45458f0f-3118-4b87-a148-bee667717bc2',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
