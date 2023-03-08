import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { Year } from 'models/year.model';
import { yearsData } from 'src/data/years.data';
import { selectRouteParams } from 'store/selectors/router.selectors';

interface IYearEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      name: string;
    }
  }
}

interface YearsState {
  entities: {[id: string]: IYearEntity};
}

export const initialState:YearsState = {
  entities: yearsData
}

export const Years = createFeature({
  name: 'years',
  reducer: createReducer(
    initialState
  ),
  extraSelectors: ({selectYearsState}) => ({
    selectYears: createSelector(
      selectYearsState,
      (state:YearsState):Year[] =>
        Object
          .keys(state.entities)
          .map((key) => new Year(state.entities[key].data))
          .sort((a, b) => b.name.localeCompare(a.name))
    ),
    selectYearByID: (id:string|null) => createSelector(
      selectYearsState,
      (state:YearsState):Year|null =>
        !!id ? (state.entities[id] ? new Year(state.entities[id]) : null) : null
    ),
    selectRoutedYear: createSelector(
      selectYearsState,
      selectRouteParams,
      (state:YearsState, {id}):Year|null =>
        state.entities[id] ? new Year(state.entities[id].data) : null
    )

  })
});

export const selectCurrentYear = createSelector(
  Years.selectYears,
  (years: Year[]):Year|null => years.filter((year) => year.name === new Date().getFullYear().toString())[0]
);

export const selectPreviousYears = createSelector(
  Years.selectYears,
  (years: Year[]):Year[] => years.filter((year) => year.name < new Date().getFullYear().toString())
);
