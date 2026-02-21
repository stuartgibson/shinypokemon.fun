# Adding Competition Points

Points are most commonly added from a screenshot shared in Slack. The screenshot will typically include a Slack username (to match against a player) and a screenshot of the shiny pokemon with a catch date. Parse the image to extract the information. **Never guess** if there is any ambiguity — ask the user to clarify.

## 1. Identify the current competition

Look in `src/data/competitions/YYYY.data.ts` (for the current year) to find the active competition based on today's date (between `startDate` and `endDate`). Note the competition's UUID and who selected it (`relationships.selectedBy`).

## 2. Find the correct points data file

The file number (`XX`) corresponds to the nth competition of the current year. Count the competitions listed in `src/data/competitions/YYYY.data.ts` to determine which number the active competition is. Empty data files may already exist for future competitions — use the one that matches the competition's position.

The file is at `src/data/points/YYYY/XX.data.ts`.

## 3. Find the player UUID

Look up the player by name or Slack display name in `src/data/players.data.ts`. Use their UUID for the relationship. If no match is found, ask the user.

## 4. Find the pokemon UUID

Search for the pokemon by name in `src/data/pokemon/gen*.data.ts` (and `regionals.data.ts` / `other.data.ts`). Use their UUID for the relationship. Note the `dexNo` for the comment.

## 5. Determine firstCatch

Search the current competition's points data file to see if any other player has already scored a point for this same pokemon. If no one has, set `firstCatch: true` — **with one exception**:

**The theme chooser exception:** The player who selected the competition theme (listed in `relationships.selectedBy` on the competition) cannot receive `firstCatch: true`. If they are the first person to catch a pokemon, set their `firstCatch: false`. The next player to catch that same pokemon gets `firstCatch: true` instead. (The firstCatch winner chooses the next theme, but you cannot choose a theme twice in a row.)

## 6. Add the entry

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
        ball: null,
        catchDate: '[YYYY-MM-DD]',
        firstCatch: [true|false],
        game: null,
        method: null,
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

## 7. If a new competition data file is needed

If a new `XX.data.ts` file is needed:
1. Create it in `src/data/points/YYYY/`
2. Add its import and spread to `src/data/points/YYYY.data.ts`

## Notes

- `catchDate` is when the user tells you it was caught, or today's date if not specified
- `ball`, `game`, and `method` are always `null` — we no longer track these
- `oldSystemPoint` is always `false` for new entries
- `value` is always `1` unless told otherwise
- The comment date format uses a double space before "to" (e.g. `15 Feb 2026  to 7 Mar 2026`)
- Dex numbers in comments are zero-padded to 4 digits (e.g. `0001`)
- Never guess at ambiguous information from screenshots — always ask
