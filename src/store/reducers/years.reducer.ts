import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { Year } from 'models/year.model';
import { yearsData } from 'src/data/years.data';
import { IJsonApiEntity } from 'src/interfaces/json-api.interfaces';
import { selectRouteParams } from 'store/selectors/router.selectors';

export interface IYearEntity extends IJsonApiEntity {
  data: {
    type: 'year';
    id: string;
    attributes: {
      name: string;
    };
  };
}

export interface IYearEntities {
  [id: string]: IYearEntity;
}

interface YearsState {
  entities: IYearEntities;
}

const initialState: YearsState = {
  entities: yearsData,
};

export const Years = createFeature({
  name: 'years',
  reducer: createReducer(initialState),
  extraSelectors: ({ selectEntities }) => ({
    selectAll: createSelector(
      selectEntities,
      (entities: IYearEntities): Year[] =>
        Object.keys(entities)
          .map((key) => new Year(entities[key].data))
          .sort((a, b) => b.name.localeCompare(a.name))
    ),

    selectYearByID: (id: string | null) =>
      createSelector(selectEntities, (entities: IYearEntities): Year | null =>
        !!id ? (entities[id] ? new Year(entities[id]) : null) : null
      ),

    selectRoutedYear: createSelector(
      selectEntities,
      selectRouteParams,
      (entities: IYearEntities, { id }): Year | null =>
        entities[id] ? new Year(entities[id].data) : null
    ),

    selectCurrentYear: createSelector(
      selectEntities,
      (entities: IYearEntities): Year | null => {
        const currentYear = new Date().getFullYear().toString();

        const yearEntity = Object.values(entities).filter(
          (entity) => entity.data.attributes.name === currentYear
        )[0];

        return yearEntity ? new Year(yearEntity.data) : null;
      }
    ),
  }),
});

export const selectPreviousYears = createSelector(
  Years.selectAll,
  (years: Year[]): Year[] =>
    years.filter((year) => year.name < new Date().getFullYear().toString())
);
