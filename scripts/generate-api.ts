import { Competition } from "models/competition.model";
import { competitionsData } from "src/data/competitions.data";
import { mkdirSync, writeFileSync } from "fs";
import { pokemonData } from "src/data/pokemon.data";
import { Pokemon } from "models/pokemon.model";
import { IJsonApiEntity } from "src/interfaces/json-api.interfaces";
import { trophyCompetitionsData } from "src/data/trophy-competitions.data";
import { playersData } from "src/data/players.data";
import { Player } from "models/player.model";
import { pointsData } from "src/data/points.data";
import { Point } from "models/point.model";
import { trophySeasonsData } from "src/data/tophy-seasons.data";
import { trophyPointsData } from "src/data/trophy-points.data";
import { Year } from "models/year.model";
import { yearsData } from "src/data/years.data";

function rawDataRemover(key : string, value : any) {
  if (key == 'rawData') return undefined;
  return value;
}

function generateApi(apiDir: string, data : {[x: string] : IJsonApiEntity}, model: any, name: string ) {
  const entities = Object.values(data);
  const objects = entities.map((entity) => new model(entity.data));
  const string = JSON.stringify(objects, rawDataRemover);
  writeFileSync(
    `${apiDir}/${name}.json`, 
    string, 
    {flag: 'w'}
  );
  
}

/** Write the public JSON API files (served at /assets/api/*.json). */
export function generateApis(assetsDir: string) {
  const apiDir = `${assetsDir}/api`;
  mkdirSync(apiDir, { recursive: true });
  generateApi(apiDir, competitionsData, Competition, 'competitions');
  generateApi(apiDir, playersData, Player, 'players');
  generateApi(apiDir, pointsData, Point, 'points');
  generateApi(apiDir, pokemonData, Pokemon, 'pokemon');
  generateApi(apiDir, trophyCompetitionsData, Competition, 'trophy-competitions');
  generateApi(apiDir, trophySeasonsData, Year, 'trophy-seasons');
  generateApi(apiDir, trophyPointsData, Point, 'trophy-points');
  generateApi(apiDir, yearsData, Year, 'years');
}