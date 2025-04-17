import { Competition } from "models/competition.model";
import { competitionsData } from "src/data/competitions.data";
import { writeFileSync } from "fs";
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

const API_DIR = 'src/assets/api/';

function rawDataRemover(key : string, value : any) {
  if (key == 'rawData') return undefined;
  return value;
}

function generateApi(data : {[x: string] : IJsonApiEntity}, model: any, name: string ) {
  const entities = Object.values(data);
  const objects = entities.map((entity) => new model(entity.data));
  const string = JSON.stringify(objects, rawDataRemover);
  writeFileSync(
    `${API_DIR}${name}.json`, 
    string, 
    {flag: 'w'}
  );
  
}

export function generateApis() {
  generateApi(competitionsData, Competition, 'competitions');
  generateApi(playersData, Player, 'players');
  generateApi(pointsData, Point, 'points');
  generateApi(pokemonData, Pokemon, 'pokemon');
  generateApi(trophyCompetitionsData, Competition, 'trophy-competitions');
  generateApi(trophySeasonsData, Year, 'trophy-seasons');
  generateApi(trophyPointsData, Point, 'trophy-points');
  generateApi(yearsData, Year, 'years');
}