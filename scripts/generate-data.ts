import { mkdirSync, writeFileSync } from 'fs';
import type { AppData } from 'src/app-data';
import { competitionsData } from 'src/data/competitions.data';
import { playersData } from 'src/data/players.data';
import { pointsData } from 'src/data/points.data';
import { pokemonData } from 'src/data/pokemon.data';
import { trophySeasonsData } from 'src/data/tophy-seasons.data';
import { trophyCompetitionsData } from 'src/data/trophy-competitions.data';
import { trophyPointsData } from 'src/data/trophy-points.data';
import { yearsData } from 'src/data/years.data';

/** Write data.json, which the app loads at startup (see src/app-data.ts). */
export function generateData(assetsDir: string) {
  const data: AppData = {
    competitions: competitionsData,
    players: playersData,
    points: pointsData,
    pokemon: pokemonData,
    trophyCompetitions: trophyCompetitionsData,
    trophyPoints: trophyPointsData,
    trophySeasons: trophySeasonsData,
    years: yearsData,
  };
  mkdirSync(assetsDir, { recursive: true });
  writeFileSync(`${assetsDir}/data.json`, JSON.stringify(data));
}
