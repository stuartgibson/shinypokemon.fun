import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AppState } from 'store/selectors/app.selectors';
import { yearsReducer } from './years.reducer';


export const reducers: ActionReducerMap<AppState> = {
  years: yearsReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
