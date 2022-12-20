import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Year } from 'models/year.model';

export const featureKey = 'years';
export const selectFeature = createFeatureSelector<YearsState>(featureKey);

export interface IYearEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      name: string;
    }
  }
}

export interface YearsState {
  entities: {[id: string]: IYearEntity};
}

export const selectYear = (id:string) => createSelector(
  selectFeature,
  (state: YearsState):Year|null =>
    state.entities[id] ? new Year(state.entities[id]) : null
);

export const selectYears = createSelector(
  selectFeature,
  (state: YearsState):Year[] => {
    const years = Object.keys(state.entities).map((key) => new Year(state.entities[key]));
    return years.sort((a, b) => a.name.localeCompare(b.name));
  }
);

export const selectCurrentYear = createSelector(
  selectYears,
  (years: Year[]):Year|null => years[0] || null
);

export const selectPreviousYears = createSelector(
  selectYears,
  (years: Year[]):Year[] => years.slice(1)
);
