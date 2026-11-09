import type { competitionsData } from 'src/data/competitions.data';
import type { playersData } from 'src/data/players.data';
import type { pointsData } from 'src/data/points.data';
import type { pokemonData } from 'src/data/pokemon.data';
import type { trophySeasonsData } from 'src/data/tophy-seasons.data';
import type { trophyCompetitionsData } from 'src/data/trophy-competitions.data';
import type { trophyPointsData } from 'src/data/trophy-points.data';
import type { yearsData } from 'src/data/years.data';

/**
 * The site's data, loaded at startup from /assets/data.json rather than
 * bundled into the app, so data-only changes don't need an app rebuild.
 * The JSON is generated from src/data by scripts/generate-data.ts.
 *
 * Only types are imported from src/data here, so none of it ends up in the
 * bundle.
 */
export interface AppData {
  competitions: typeof competitionsData;
  players: typeof playersData;
  points: typeof pointsData;
  pokemon: typeof pokemonData;
  trophyCompetitions: typeof trophyCompetitionsData;
  trophyPoints: typeof trophyPointsData;
  trophySeasons: typeof trophySeasonsData;
  years: typeof yearsData;
}

export const DATA_URL = '/assets/data.json';

// Filled in by main.ts before the app (and so the store) is loaded.
export const appData = {} as AppData;
