import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";

export const pointsData2023_8:IPointEntities = {
  //  Pokémon on Switch for the First Time 16 Apr 2023  to 29 Apr 2023
  //  Tone (@Tone)
  //  0779. Bruxish
  '53d7a928-974b-48e3-a51d-7d9c010fede7': {
    data: {
      id: '53d7a928-974b-48e3-a51d-7d9c010fede7',
      type: 'point',
      attributes: {
        ball: 'repeat' as BallType,
        catchDate: '2023-04-16',
        firstCatch: true,
        game: 'violet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: 'a77269b3-f326-4609-b44b-a804ef7a9f34',
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
            id: 'd06db98e-bac0-4676-bf64-0cb0101ef847',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Pokémon on Switch for the First Time 16 Apr 2023  to 29 Apr 2023
  //  james (@seginus)
  //  0973. Flamigo
  'ddf959f7-9dda-41cd-a7f3-767c2a87f2a7': {
    data: {
      id: 'ddf959f7-9dda-41cd-a7f3-767c2a87f2a7',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-04-16',
        firstCatch: false,
        game: 'violet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: 'a77269b3-f326-4609-b44b-a804ef7a9f34',
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
            id: 'c2443651-d521-4dcd-8539-a00b84a4efaf',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Pokémon on Switch for the First Time 16 Apr 2023  to 29 Apr 2023
  //  Robert Lewis (@A1966Mustang)
  //  0739. Crabrawler
  '0faf1c28-48d4-449d-9ad0-19b3b9b1adcb': {
    data: {
      id: '0faf1c28-48d4-449d-9ad0-19b3b9b1adcb',
      type: 'point',
      attributes: {
        ball: 'quick' as BallType,
        catchDate: '2023-04-16',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: 'a77269b3-f326-4609-b44b-a804ef7a9f34',
            type: 'competition'
          }
        },
        player: {
          data: {
            id: '3657e524-63a2-4eb6-b768-c20b104e41a1',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '97bcb939-d1b2-4541-a03f-ef2b6af51ecf',
            type: 'pokemon'
          }
        }
      }
    }
  }

}
