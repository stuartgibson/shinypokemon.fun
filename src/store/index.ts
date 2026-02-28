import { provideState } from '@ngrx/store';
import {
  Competitions,
  Players,
  Points,
  Pokemons,
  TrophyPoints,
  TrophySeasons,
  Years,
} from './reducers';
import { TrophyCompetitions } from './reducers/trophy-competitions.reducer';

export const stateProviders = [
  provideState(Competitions),
  provideState(Players),
  provideState(Points),
  provideState(Pokemons),
  provideState(TrophyCompetitions),
  provideState(TrophyPoints),
  provideState(TrophySeasons),
  provideState(Years),
];
