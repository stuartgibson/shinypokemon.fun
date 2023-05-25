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
  },
    //  Starters 14 May 2023  to 27 May 2023
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0394. Prinplup
  '1c90c332-afcf-46c5-bbcb-de19ce0e9cf5': {
    data: {
      id: '1c90c332-afcf-46c5-bbcb-de19ce0e9cf5',
      type: 'point',
      attributes: {
        ball: 'jet' as BallType,
        catchDate: '2023-05-14',
        firstCatch: false,
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
            id: '1e665730-88cd-4ca3-b03c-961c3a71e749',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'a05f33d0-472a-4db2-b6ff-a683c52101a5',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Starters 14 May 2023  to 27 May 2023
  //  Tone (@Tone)
  //  0133. Eevee
  'c1ee881d-b06e-401d-8978-f4813bef340e': {
    data: {
      id: 'c1ee881d-b06e-401d-8978-f4813bef340e',
      type: 'point',
      attributes: {
        ball: 'pokeball' as BallType,
        catchDate: '2023-05-19',
        firstCatch: false,
        game: 'pogo' as GameType,
        method: 'pogoRandom' as MethodType
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
            id: 'b5ad7979-4d15-453e-b1a0-a4fcf1ba0120',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Starters 14 May 2023  to 27 May 2023
  //  Lewis Dobie (@Lewthelegend)
  //  0728. Popplio
  'e2f2b14f-9e33-47ad-b848-efc501169aff': {
    data: {
      id: 'e2f2b14f-9e33-47ad-b848-efc501169aff',
      type: 'point',
      attributes: {
        ball: 'dive' as BallType,
        catchDate: '2023-05-18',
        firstCatch: false,
        game: 'sword' as GameType,
        method: 'breedMasuda' as MethodType
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
            id: '7d054896-a0ea-4368-bff1-856b6abf8419',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '631a2c39-6231-45b3-807c-cd365c5bf995',
            type: 'pokemon'
          }
        }
      }
    }
  },
   //  Starters 14 May 2023  to 27 May 2023
  //  Padukes (@Padukes)
  //  0657. Frogadier
  'd0bc2b64-ec92-4366-b1ba-b0a4a016a16d': {
    data: {
      id: 'd0bc2b64-ec92-4366-b1ba-b0a4a016a16d',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2023-05-16',
        firstCatch: false,
        game: 'x' as GameType,
        method: 'friendSafari' as MethodType
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
            id: '1ca0b66b-2791-41c2-bf6d-aeabae1cfdb0',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'ad445bbf-ec67-4ded-a608-6a6720d89e61',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
