import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_6:IPointEntities = {
  //  Poison 19 Mar 2023  to 1 Apr 2023
  //  Tone (@Tone)
  //  0747. Mareanie
  '91d5eb80-9f96-415f-b164-84f0d69a6790': {
    data: {
      id: '91d5eb80-9f96-415f-b164-84f0d69a6790',
      type: 'point',
      attributes: {
        ball: 'heal' as BallType,
        catchDate: '2023-03-19',
        firstCatch: true,
        game: 'violet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '4c08c4e6-8137-4761-b844-9c0c2d38ab2d',
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
            id: '77f390a4-0d38-434e-af28-8c858e060b3c',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Poison 19 Mar 2023  to 1 Apr 2023
  //  Brandon Hero of Ice (@Brandon Heroice18)
  //  0265. Wurmple
  'f09f382f-9489-4730-a189-44e73a90c535': {
    data: {
      id: 'f09f382f-9489-4730-a189-44e73a90c535',
      type: 'point',
      attributes: {
        ball: 'jet' as BallType,
        catchDate: '2023-03-19',
        firstCatch: false,
        game: 'legendsArceus' as GameType,
        method: 'outbreakLegendsArceus' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '4c08c4e6-8137-4761-b844-9c0c2d38ab2d',
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
            id: 'c36f780b-5769-407b-9600-921d57ace904',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
