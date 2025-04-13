import { StoreModule, provideState } from '@ngrx/store';
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

export interface State {}

export const featureReducers = [
  StoreModule.forFeature(Competitions),
  StoreModule.forFeature(Players),
  StoreModule.forFeature(Points),
  StoreModule.forFeature(Pokemons),
  StoreModule.forFeature(TrophyCompetitions),
  StoreModule.forFeature(TrophyPoints),
  StoreModule.forFeature(TrophySeasons),
  StoreModule.forFeature(Years),
];

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

// export const metaReducers: MetaReducer<State>[] = !environment.production ? []: [];
