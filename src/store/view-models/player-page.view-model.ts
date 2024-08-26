import { createSelector } from "@ngrx/store";
import { Competition } from "models/competition.model";
import { Player } from "models/player.model";
import { Point } from "models/point.model";
import { Pokemon } from "models/pokemon.model";
import { InlineCompetitionComponent } from "src/app/components/competitions/inline-competition/inline-competition.component";
import { PlayerPageComponent } from "src/app/components/player/player-page/player-page.component";
import { databaseString } from "src/app/helpers/dates.helper";
import { Competitions, ICompetitionEntities, IPokemonEntities, Players, Points, Pokemons } from "store/reducers";

export type PlayerPagePointDatum = {
  point: Point,
  pokemon: Pokemon,
  competition: Competition
}

export type PlayerPageViewModel = {
  player: Player|null;
  data: PlayerPagePointDatum[];
}

export const playerPageViewModel = createSelector(
  Players.selectRoutedPlayer,
  Points.selectRoutedPlayerPoints,
  Pokemons.selectEntities,
  Competitions.selectEntities,
  (
    player: Player|null,
    points: Point[],
    pokemonEntities: IPokemonEntities,
    competitionEntities: ICompetitionEntities
  ):PlayerPageViewModel => {

    let data: PlayerPagePointDatum[] = [];

    for (let point of points) {
      let pokemon:Pokemon = new Pokemon(pokemonEntities[point.pokemonID].data);
      let competition:Competition = new Competition(competitionEntities[point.competitionID].data);

      data.push({
        point: point, 
        pokemon: pokemon,
        competition: competition
        });
    }

    // Reverse Chronological order
    data = data.sort((a: PlayerPagePointDatum, b: PlayerPagePointDatum) => databaseString(b.point.catchDate).localeCompare(databaseString(a.point.catchDate)));
 
    return {
      player: player,
      data: data
    };
  }
);
