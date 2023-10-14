import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
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
  },
    //  Fossils 1 Oct 2023  to 14 Oct 2023
  //  Lewis Dobie (@Lewthelegend)
  //  0564. Tirtouga
  '8687e963-4629-4a35-aa78-3d9c945133ef': {
    data: {
      id: '8687e963-4629-4a35-aa78-3d9c945133ef',
      type: 'point',
      attributes: {
        ball: 'lure' as BallType,
        catchDate: '2023-10-12',
        firstCatch: false,
        game: null,
        method: 'random' as MethodType
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
            id: '7d054896-a0ea-4368-bff1-856b6abf8419',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '1c53ded7-feab-4825-9621-7135c85ec23f',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Fossils 1 Oct 2023  to 14 Oct 2023
  //  Tone (@Tone)
  //  0347. Anorith
  'cabb78d1-7b55-4de0-a073-959fb6091828': {
    data: {
      id: 'cabb78d1-7b55-4de0-a073-959fb6091828',
      type: 'point',
      attributes: {
        ball: '—' as BallType,
        catchDate: '2023-10-13',
        firstCatch: false,
        game: 'pogo' as GameType,
        method: 'pogoRandom' as MethodType
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
            id: '6b7a4cdb-fd7b-448c-9f03-2b49b4ab3b9d',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '72b0a709-4c68-4b1d-a423-4e479a4752c6',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Fossils 1 Oct 2023  to 14 Oct 2023
  //  Stuart (@stuart)
  //  0564. Tirtouga
  'e75747e0-abb1-4638-ae40-80f615eea5b5': {
    data: {
      id: 'e75747e0-abb1-4638-ae40-80f615eea5b5',
      type: 'point',
      attributes: {
        ball: 'dive' as BallType,
        catchDate: '2023-10-14',
        firstCatch: false,
        game: 'sword' as GameType,
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
            id: '80cfecae-ef2e-437b-bb94-f0309ee3b3d2',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '1c53ded7-feab-4825-9621-7135c85ec23f',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
