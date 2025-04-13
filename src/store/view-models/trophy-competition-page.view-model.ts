import { createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { Pokemon } from 'models/pokemon.model';
import { Pokemons, TrophyPoints } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';
import { TrophyCompetitions } from 'store/reducers/trophy-competitions.reducer';

export type TrophyCompetitionPageViewModel = {
  trophyCompetition: Competition | null;
  points: Point[];
  validPokemon: Pokemon[];
  searchQuery: string;
};

export const trophyCompetitionPageViewModel = createSelector(
  TrophyCompetitions.selectRoutedTrophyCompetition,
  Competitions.selectSearchQuery,
  TrophyPoints.selectRoutedTrophyCompetitionPoints,
  Pokemons.selectFilteredRoutedTrophyCompetitionPokemon,
  (
    trophyCompetition: Competition | null,
    searchQuery: string,
    points: Point[],
    validPokemon: Pokemon[]
  ): TrophyCompetitionPageViewModel => ({
    trophyCompetition,
    points,
    validPokemon,
    searchQuery,
  })
);
