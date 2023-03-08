import { isDevMode } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AppState } from 'store/selectors/app.selectors';
import { competitionsReducer } from './competitions.reducer';
import { playersReducer } from './players.reducer';
import { pointsReducer } from './points.reducer';
import { pokemonReducer } from './pokemon.reducer';

export const reducers: ActionReducerMap<AppState> = {
  competitions: competitionsReducer,
  players: playersReducer,
  points: pointsReducer,
  pokemon: pokemonReducer,
  router: routerReducer
};

export * from './years.reducer';

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
