import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_13:IPointEntities = {
  //  Café Remix 25 Jun 2023  to 8 Jul 2023
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0025. Pikachu
  '847df861-6118-411d-ae7f-831e59425a31': {
    data: {
      id: '847df861-6118-411d-ae7f-831e59425a31',
      type: 'point',
      attributes: {
        ball: null,
        catchDate: '2023-06-25',
        firstCatch: true,
        game: 'legendsArceus' as GameType,
        method: 'outbreakLegendsArceus' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '5618f11e-bde4-4812-889e-7f55ac96f0e9',
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
            id: '230abe97-6933-45e0-b351-d8bd2e7c0543',
            type: 'pokemon'
          }
        }
      }
    }
  },
    //  Café Remix 25 Jun 2023  to 8 Jul 2023
  //  Lewis Dobie (@Lewthelegend)
  //  0129. Magikarp
  '7830a8b9-69b0-43e0-87ec-6a1cb3cc867f': {
    data: {
      id: '7830a8b9-69b0-43e0-87ec-6a1cb3cc867f',
      type: 'point',
      attributes: {
        ball: 'pokeball' as BallType,
        catchDate: '2023-06-27',
        firstCatch: false,
        game: 'alphaSapphire' as GameType,
        method: 'chainFish' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '5618f11e-bde4-4812-889e-7f55ac96f0e9',
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
            id: '494c864d-773a-4707-8aec-a26e87c8f3a6',
            type: 'pokemon'
          }
        }
      }
    }
  }

}
