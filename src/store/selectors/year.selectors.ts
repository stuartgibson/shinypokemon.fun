import { createSelector } from '@ngrx/store';

const selectFeature = (state: AppState) => state.feature;

export const selectPreviousYearList = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
