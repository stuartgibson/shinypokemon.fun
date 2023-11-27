import { IPointEntities } from "store/reducers";
import { BallType } from "types/ball.types";
import { GameType } from "types/game.types";
import { MethodType } from "types/method.types";

export const pointsData2023_24:IPointEntities = {
  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  james (@seginus)
  //  0133. Eevee
  '55073097-3c91-4ea5-82fd-8d50a08bbbc3': {
    data: {
      id: '55073097-3c91-4ea5-82fd-8d50a08bbbc3',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-11-26',
        firstCatch: true,
        game: 'violet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: 'b5ad7979-4d15-453e-b1a0-a4fcf1ba0120',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Padukes (@Padukes)
  //  0585. Deerling
  'df0f1be0-ba94-45cf-a177-5b8164c90258': {
    data: {
      id: 'df0f1be0-ba94-45cf-a177-5b8164c90258',
      type: 'point',
      attributes: {
        ball: 'heal' as BallType,
        catchDate: '2023-11-26',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: 'de2252f6-ba8f-40f9-98de-c4b725e7bffe',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Stuart (@stuart)
  //  0928. Smoliv
  '75e5d376-2dfc-4e0e-a4e3-5b8f80faf849': {
    data: {
      id: '75e5d376-2dfc-4e0e-a4e3-5b8f80faf849',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-11-26',
        firstCatch: false,
        game: 'violet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: '31b03b29-3173-4950-91e9-0e8aeb568952',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Padukes (@Padukes)
  //  0238. Smoochum
  'c887f726-361d-488c-8cb2-04cbbb44047d': {
    data: {
      id: 'c887f726-361d-488c-8cb2-04cbbb44047d',
      type: 'point',
      attributes: {
        ball: 'heal' as BallType,
        catchDate: '2023-11-26',
        firstCatch: false,
        game: '—' as GameType,
        method: 'sos' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: 'fe4377b2-be91-4308-9401-9d337624ad45',
            type: 'pokemon'
          }
        }
      }
    }
  },

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Tone (@Tone)
  //  0666. Vivillon
  'cf7acd36-bae8-4a97-95e3-f4921b454b98': {
    data: {
      id: 'cf7acd36-bae8-4a97-95e3-f4921b454b98',
      type: 'point',
      attributes: {
        ball: 'safari' as BallType,
        catchDate: '2023-11-26',
        firstCatch: false,
        game: 'violet' as GameType,
        method: null
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: 'f1c992c4-d94d-42f4-add7-d16864cdea0f',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Stuart (@stuart)
  //  0744. Rockruff
  'f6ea2c4f-4bc9-41b6-aad3-f8d2206e9d65': {
    data: {
      id: 'f6ea2c4f-4bc9-41b6-aad3-f8d2206e9d65',
      type: 'point',
      attributes: {
        ball: 'dive' as BallType,
        catchDate: '2023-11-26',
        firstCatch: false,
        game: 'violet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: 'e06311f7-1452-49e3-8660-2c9e4cc98aa9',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Padukes (@Padukes)
  //  0285. Shroomish
  'a71e6a20-5f0b-4464-8dd1-16a0e6ea390b': {
    data: {
      id: 'a71e6a20-5f0b-4464-8dd1-16a0e6ea390b',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-11-26',
        firstCatch: false,
        game: 'scarlet' as GameType,
        method: 'sandwich' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: 'f20df009-de8b-4983-a8d8-ce86f339b03b',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Tone (@Tone)
  //  0176. Togetic
  '5cdc6723-dc31-48f6-aea6-565f05a80271': {
    data: {
      id: '5cdc6723-dc31-48f6-aea6-565f05a80271',
      type: 'point',
      attributes: {
        ball: 'pokeball' as BallType,
        catchDate: '2023-11-27',
        firstCatch: false,
        game: 'pogo' as GameType,
        method: 'pogoRandom' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: 'f56b3b40-1d5c-4115-90e2-c438d4b89c3e',
            type: 'pokemon'
          }
        }
      }
    }
  }
,

  //  Brittany & Lewis’ Lucky Pokémon 26 Nov 2023  to 9 Dec 2023
  //  Padukes (@Padukes)
  //  0086. Seel
  '40283307-39f3-4534-9b0f-da18b61b566e': {
    data: {
      id: '40283307-39f3-4534-9b0f-da18b61b566e',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-11-27',
        firstCatch: false,
        game: 'ultraSun' as GameType,
        method: 'sos' as MethodType
      },
      relationships: {
        competition: {
          data: {
            id: '66e585bc-b75a-47e7-aa88-28ce03a1b4c2',
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
            id: '3a3d7a26-b94e-49e6-98d7-3d4ba82fb7da',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
