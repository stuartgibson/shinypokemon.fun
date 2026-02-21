# Adding Competition Points

When asked to add a competition point (e.g. "Stuart caught a shiny Bulbasaur"), follow these steps:

## 1. Identify the current competition

Look in `src/data/competitions/YYYY.data.ts` (for the current year) to find the active competition based on today's date (between `startDate` and `endDate`). Note the competition's UUID.

## 2. Find the player UUID

Look up the player by name or display name in `src/data/players.data.ts`. Use their UUID for the relationship.

## 3. Find the pokemon UUID

Search for the pokemon by name in `src/data/pokemon/gen*.data.ts` (and `regionals.data.ts` / `other.data.ts`). Use their UUID for the relationship. Note the `dexNo` for the comment.

## 4. Determine firstCatch

Search the current competition's points data file to see if any other player has already scored a point for this same pokemon. If no one has, set `firstCatch: true`. Otherwise, `firstCatch: false`.

## 5. Add the entry

Edit the correct points data file at `src/data/points/YYYY/XX.data.ts` where `XX` matches the current competition number.

Generate a new UUID for the entry. The format is:

```typescript
  //  [Competition Theme] [Start Date D Mon YYYY]  to [End Date D Mon YYYY]
  //  [Player Real Name] (@[Display Name])
  //  [Dex Number]. [Pokemon Name]
  '[new-uuid]': {
    data: {
      id: '[same-new-uuid]',
      type: 'point',
      attributes: {
        ball: '[BallType]' as BallType | null,
        catchDate: '[YYYY-MM-DD]',
        firstCatch: [true|false],
        game: '[GameType]' as GameType | null,
        method: '[MethodType]' as MethodType | null,
        oldSystemPoint: false,
        value: 1,
      },
      relationships: {
        competition: {
          data: {
            id: '[competition-uuid]',
            type: 'competition',
          },
        },
        player: {
          data: {
            id: '[player-uuid]',
            type: 'player',
          },
        },
        pokemon: {
          data: {
            id: '[pokemon-uuid]',
            type: 'pokemon',
          },
        },
      },
    },
  },
```

## 6. If the data file is empty

If the data file exports an empty object `{}`, you need to add imports for the types used:

```typescript
import { BallType } from 'types/ball.types';
import { GameType } from 'types/game.types';
import { MethodType } from 'types/method.types';
```

Only add imports for types actually used (e.g. don't import BallType if ball is null).

## 7. If a new competition data file is needed

If a new `XX.data.ts` file is needed:
1. Create it in `src/data/points/YYYY/`
2. Add its import and spread to `src/data/points/YYYY.data.ts`

## Notes

- `catchDate` is when the user tells you it was caught, or today's date if not specified
- `ball`, `game`, and `method` can be `null` if not provided — do not guess
- The `as BallType` / `as GameType` / `as MethodType` type assertions are only needed when the value is not null
- `oldSystemPoint` is always `false` for new entries
- `value` is always `1` unless told otherwise
- The comment date format uses a double space before "to" (e.g. `15 Feb 2026  to 7 Mar 2026`)
- Dex numbers in comments are zero-padded to 4 digits (e.g. `0001`)

## Valid types

- **GameType**: red, blue, green, yellow, gold, silver, crystal, ruby, sapphire, emerald, fireRed, leafGreen, diamond, pearl, platinum, heartGold, soulSilver, black, white, black2, white2, x, y, omegaRuby, alphaSapphire, sun, moon, ultraSun, ultraMoon, letsGoPikachu, letsGoEevee, sword, shield, brilliantDiamond, shiningPearl, legendsArceus, scarlet, violet, colosseum, xd, pogo
- **MethodType**: breed, breedMasuda, chain, chainFish, dynamaxAdventure, friendSafari, horde, oddEgg, outbreakLegendsArceus, outbreakSV, pogoEgg, pogoEvent, pogoRaid, pogoRandom, pogoResearch, radarDPPt, radarXY, random, runaway, reset, raid, sandwich, sos
- **BallType**: beast, cherish, dive, dream, dusk, fast, feather, friend, gigaton, great, greatHisui, heal, heavy, heavyHisui, jet, leaden, level, love, lure, luxury, master, moon, nest, net, origin, park, pokeball, pokeballHisui, premier, quick, repeat, safari, sport, strange, timer, ultra, ultraHisui, wing
