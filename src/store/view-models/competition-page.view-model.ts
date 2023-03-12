import { createSelector } from "@ngrx/store";
import { Competition } from "models/competition.model";
import { Point } from "models/point.model";
import { Pokemon } from "models/pokemon.model";
import { Points, Pokemons } from "store/reducers";
import { Competitions } from "store/reducers/competitions.reducer";

export type CompetitionPageViewModel = {
  competition: Competition|null;
  points: Point[];
  validPokemon: Pokemon[];
  searchQuery: string;
}

export const competitionPageViewModel = createSelector(
  Competitions.selectRoutedCompetition,
  Competitions.selectSearchQuery,
  Points.selectRoutedCompetitionPoints,
  Pokemons.selectFilteredRoutedCompetitionPokemon,
  (
    competition: Competition|null,
    searchQuery: string,
    points: Point[],
    pokemon: Pokemon[]
  ):CompetitionPageViewModel => {

    return {
      competition: competition,
      points: points,
      validPokemon: pokemon,
      searchQuery: searchQuery
    }
  }
);
