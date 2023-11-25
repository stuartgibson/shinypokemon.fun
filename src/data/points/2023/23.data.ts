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
  },
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
  },
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
  },
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
  },
    //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  sam (treecko) (@treeckonian)
  //  0877. Morpeko
  '399e2108-a515-457f-8a71-c79bb3eee8fa': {
    data: {
      id: '399e2108-a515-457f-8a71-c79bb3eee8fa',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-11-16',
        firstCatch: false,
        game: null,
        method: null
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
            id: '68fca39c-6481-479b-9ec7-0dcb994ac4fd',
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
  },
  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Devilish Inferno (@Alex)
  //  0877. Morpeko
  'b4e0fbda-0d17-4818-8027-67b99ef32fa2': {
    data: {
      id: 'b4e0fbda-0d17-4818-8027-67b99ef32fa2',
      type: 'point',
      attributes: {
        ball: 'moon' as BallType,
        catchDate: '2023-11-16',
        firstCatch: false,
        game: null,
        method: 'breedMasuda' as MethodType
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
            id: '3be16e09-d7c4-4ea5-a5bc-8fb3366355b6',
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
  },
  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Kathryn (@SteeleTheWin)
  //  0172. Pichu
  'd6fefe1d-8f8e-48c1-bc2a-1e90b19a97b3': {
    data: {
      id: 'd6fefe1d-8f8e-48c1-bc2a-1e90b19a97b3',
      type: 'point',
      attributes: {
        ball: 'pokeball' as BallType,
        catchDate: '2023-11-19',
        firstCatch: false,
        game: 'pogo' as GameType,
        method: 'pogoEgg' as MethodType
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
            id: 'ec689f25-fffe-4249-b89d-603d574bacee',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '8664bc55-da05-4069-9e68-7512901224ac',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Lewis Dobie (@Lewthelegend)
  //  0155. Cyndaquil
  '8ce3d1d2-c3e1-4278-87cf-dc63f6bfe149': {
    data: {
      id: '8ce3d1d2-c3e1-4278-87cf-dc63f6bfe149',
      type: 'point',
      attributes: {
        ball: '—' as BallType,
        catchDate: '2023-11-21',
        firstCatch: false,
        game: 'pogo' as GameType,
        method: 'pogoRandom' as MethodType
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
            id: 'ae25232c-f906-4cbb-b8f9-da3a67345154',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  james (@seginus)
  //  0161. Sentret
  '147c1767-a9d1-4dbd-945c-fc5207511961': {
    data: {
      id: '147c1767-a9d1-4dbd-945c-fc5207511961',
      type: 'point',
      attributes: {
        ball: 'premier' as BallType,
        catchDate: '2023-11-12',
        firstCatch: false,
        game: null,
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
            id: 'c159b074-9e9f-4e1b-889f-a64dd78598a6',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'b29bd872-719d-4138-be4f-3d839f2496b1',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Stuart (@stuart)
  //  0184. Azumarill
  '1668ea63-f695-4175-a311-97bc8ac68be6': {
    data: {
      id: '1668ea63-f695-4175-a311-97bc8ac68be6',
      type: 'point',
      attributes: {
        ball: 'luxury' as BallType,
        catchDate: '2023-11-25',
        firstCatch: false,
        game: 'violet' as GameType,
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
            id: '80cfecae-ef2e-437b-bb94-f0309ee3b3d2',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: '40302532-8dc3-4a8b-9669-5c6f19ae7290',
            type: 'pokemon'
          }
        }
      }
    }
  },
  //  Rodent Pokémon 12 Nov 2023  to 25 Nov 2023
  //  Stuart (@stuart)
  //  0183. Marill
  '0513d829-c4f7-4a41-866c-4d3d4f398213': {
    data: {
      id: '0513d829-c4f7-4a41-866c-4d3d4f398213',
      type: 'point',
      attributes: {
        ball: 'dusk' as BallType,
        catchDate: '2023-11-25',
        firstCatch: false,
        game: 'violet' as GameType,
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
            id: '80cfecae-ef2e-437b-bb94-f0309ee3b3d2',
            type: 'player'
          }
        },
        pokemon: {
          data: {
            id: 'ed377739-ba16-43b7-9292-399ba1dd7d29',
            type: 'pokemon'
          }
        }
      }
    }
  }
}
