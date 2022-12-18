import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface AppState {
  years: {}
}

export const reducers: ActionReducerMap<AppState> = {
  years: (state = {}, action) => state
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
