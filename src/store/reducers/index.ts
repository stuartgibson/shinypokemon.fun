import { isDevMode } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AppState } from 'store/selectors/app.selectors';
import { catchesReducer } from './catches.reducer';
import { competitionsReducer } from './competitions.reducer';
import { pokemonReducer } from './pokemon.reducer';
import { yearsReducer } from './years.reducer';

export const reducers: ActionReducerMap<AppState> = {
  catches: catchesReducer,
  competitions: competitionsReducer,
  pokemon: pokemonReducer,
  router: routerReducer,
  years: yearsReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
