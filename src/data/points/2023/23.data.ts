import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_23:IPointEntities = {
  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Tone (@Tone)
  //  0877. Morpeko
  'eac59b70-ff98-4ac7-b618-1771b6a44c43': {
    data: {
      id: 'eac59b70-ff98-4ac7-b618-1771b6a44c43',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-11-12',
        firstCatch: true,
        game: null,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: 'cadbff42-1bf0-4ccf-9890-f7d283286b5e',
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
            id: '2ede5b2f-253d-49e8-ba06-e00a412dc250',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Padukes (@Padukes)
  //  0050. Diglett (Alolan)
  '582a1207-a976-4b5c-8405-51fd3a681cab': {
    data: {
      id: '582a1207-a976-4b5c-8405-51fd3a681cab',
      type: 'point',
      attributes: {
        ball: 'lure' as BallType,
        catchDate: '2023-11-13',
        firstCatch: false,
        game: null,
        method: 'sos' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: 'cadbff42-1bf0-4ccf-9890-f7d283286b5e',
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
            id: 'b6d62454-b853-4731-a020-d810f536d7fa',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Lewis Dobie (@Lewthelegend)
  //  0029. Nidoran♀
  'a6c5fd14-2c7f-4776-a3b0-9051145817e0': {
    data: {
      id: 'a6c5fd14-2c7f-4776-a3b0-9051145817e0',
      type: 'point',
      attributes: {
        ball: '—' as BallType,
        catchDate: '2023-11-12',
        firstCatch: false,
        game: null,
        method: 'horde' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: 'cadbff42-1bf0-4ccf-9890-f7d283286b5e',
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
            id: '30f78841-c47a-4bd4-8ee1-f033a0fe758d',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Padukes (@Padukes)
  //  0924. Tandemaus
  'f348ecbb-3866-41c7-9f81-4db022ae30b6': {
    data: {
      id: 'f348ecbb-3866-41c7-9f81-4db022ae30b6',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-11-14',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: '—' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: 'cadbff42-1bf0-4ccf-9890-f7d283286b5e',
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
            id: 'f4124e83-411f-4391-84b8-8816a6716f69',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
