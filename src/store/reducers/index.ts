import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AppState } from 'store/selectors/app.selectors';
import { competitionsReducer } from './competitions.reducer';
import { pokemonReducer } from './pokemon.reducer';
import { yearsReducer } from './years.reducer';

export const reducers: ActionReducerMap<AppState> = {
  competitions: competitionsReducer,
  pokemon: pokemonReducer,
  years: yearsReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
