import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

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
  },
    //  Unova 3 Sep 2023  to 16 Sep 2023
  //  Padukes (@Padukes)
  //  0535. Tympole
  '69a4d199-202a-4f5b-945a-e4c6a840ac3d': {
    data: {
      id: '69a4d199-202a-4f5b-945a-e4c6a840ac3d',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2023-09-03',
        firstCatch: false,
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
  },
  //  Unova 3 Sep 2023  to 16 Sep 2023
  //  Padukes (@Padukes)
  //  0535. Tympole
  '8a8e3996-1dd6-4b41-96b0-bd0a0e222d0f': {
    data: {
      id: '8a8e3996-1dd6-4b41-96b0-bd0a0e222d0f',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2023-09-03',
        firstCatch: false,
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
  },
  //  Unova 3 Sep 2023  to 16 Sep 2023
  //  Devilish Inferno (@Alex)
  //  0636. Larvesta
  '3a06efec-6d08-4635-aed4-a20197328a0b': {
    data: {
      id: '3a06efec-6d08-4635-aed4-a20197328a0b',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-09-04',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
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
            id: '3be16e09-d7c4-4ea5-a5bc-8fb3366355b6',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'f3f2667e-99f3-4b9f-ba31-61c03aceb378',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Unova 3 Sep 2023  to 16 Sep 2023
  //  Devilish Inferno (@Alex)
  //  0585. Deerling
  '45843dd2-11b2-4676-8e0a-ee5ad4e1265c': {
    data: {
      id: '45843dd2-11b2-4676-8e0a-ee5ad4e1265c',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-09-03',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: 'random' as MethodType
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
            id: '3be16e09-d7c4-4ea5-a5bc-8fb3366355b6',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'de2252f6-ba8f-40f9-98de-c4b725e7bffe',
            type: 'pokemon'
          }
        }
      }
    }
  }

}
