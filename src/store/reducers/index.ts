import { isDevMode } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export const reducers: ActionReducerMap<{}> = {
  router: routerReducer,
};

export * from './competitions.reducer';
export * from './players.reducer';
export * from './points.reducer';
export * from './pokemon.reducer';
export * from './trophy-competitions.reducer';
export * from './trophy-points.reducer';
export * from './trophy-seasons.reducer';
export * from './years.reducer';

export const metaReducers: MetaReducer<{}>[] = isDevMode() ? [] : [];
