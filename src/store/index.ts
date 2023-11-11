import { StoreModule, provideState } from '@ngrx/store';
import { Competitions, Players, Points, Pokemons, Years } from './reducers';

export interface State {}

export const featureReducers = [
  StoreModule.forFeature(Competitions),
  StoreModule.forFeature(Players),
  StoreModule.forFeature(Points),
  StoreModule.forFeature(Pokemons),
  StoreModule.forFeature(Years),
]

export const stateProviders = [
  provideState(Competitions),
  provideState(Players),
  provideState(Points),
  provideState(Pokemons),
  provideState(Years)
]

// export const metaReducers: MetaReducer<State>[] = !environment.production ? []: [];
