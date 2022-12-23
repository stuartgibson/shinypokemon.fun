import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Year } from 'models/year.model';
import { selectRouteParams } from './router.selectors';

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

export const selectYears = createSelector(
  selectFeature,
  (state: YearsState):Year[] => {
    const years = Object.keys(state.entities).map((key) => new Year(state.entities[key].data));
    return years.sort((a, b) => b.name.localeCompare(a.name));
  }
);

export const selectYear = (id:string|null) => createSelector(
  selectFeature,
  (state: YearsState):Year|null => {
    if(!id) return null;
    return state.entities[id] ? new Year(state.entities[id]) : null
  }
);

export const selectRoutedYear = createSelector(
  selectFeature,
  selectRouteParams,
  (state: YearsState, {id}):Year|null =>
    state.entities[id] ? new Year(state.entities[id].data) : null
);

export const selectCurrentYear = createSelector(
  selectYears,
  (years: Year[]):Year|null => years.filter((year) => year.name === new Date().getFullYear().toString())[0]
);

export const selectPreviousYears = createSelector(
  selectYears,
  (years: Year[]):Year[] => years.filter((year) => year.name < new Date().getFullYear().toString())
);
