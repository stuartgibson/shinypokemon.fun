import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_19:IPointEntities = {
  //  Teal Mask Returns 17 Sep 2023  to 30 Sep 2023
  //  Padukes (@Padukes)
  //  0782. Jangmo-o
  '0454c4e2-b526-44cb-a6ae-dffb3045afff': {
    data: {
      id: '0454c4e2-b526-44cb-a6ae-dffb3045afff',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-09-17',
        firstCatch: true,
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '58948eac-c6b9-42aa-8696-5e30586c5a6b',
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
            id: '3ef6183e-c053-4b59-9be4-194a784c21a8',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Teal Mask Returns 17 Sep 2023  to 30 Sep 2023
  //  Padukes (@Padukes)
  //  0782. Jangmo-o
  '776d509a-bc98-4bea-a248-c64ab726b7a2': {
    data: {
      id: '776d509a-bc98-4bea-a248-c64ab726b7a2',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-09-17',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '58948eac-c6b9-42aa-8696-5e30586c5a6b',
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
            id: '3ef6183e-c053-4b59-9be4-194a784c21a8',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Teal Mask Returns 17 Sep 2023  to 30 Sep 2023
  //  james (@seginus)
  //  0167. Spinarak
  'fe7e0308-72b3-442c-8b05-56adc4ce53b5': {
    data: {
      id: 'fe7e0308-72b3-442c-8b05-56adc4ce53b5',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-09-17',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: '—' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '58948eac-c6b9-42aa-8696-5e30586c5a6b',
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
            id: '16b77d80-6e39-4faf-a51d-0f218fbdc1d0',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Teal Mask Returns 17 Sep 2023  to 30 Sep 2023
  //  Al McKinlay (@Al)
  //  0736. Grubbin
  'b200208a-f2f7-4c4c-aa02-18807380d473': {
    data: {
      id: 'b200208a-f2f7-4c4c-aa02-18807380d473',
      type: 'point',
      attributes: {
        ball: 'pokeball' as BallType,
        catchDate: '2023-09-18',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: '—' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '58948eac-c6b9-42aa-8696-5e30586c5a6b',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: 'ff4976ce-1519-4ad6-a124-eef49565fc58',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '509fa83d-48c9-441f-9896-143a602e2454',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
