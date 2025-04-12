import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { Year } from 'models/year.model';
import { trophySeasonsData } from 'src/data/tophy-seasons.data';
import { selectRouteParams } from 'store/selectors/router.selectors';
import { IYearEntities } from './years.reducer';

interface TrophySeasonsState {
  entities: IYearEntities;
}

const initialState: TrophySeasonsState = {
  entities: trophySeasonsData,
};

export const TrophySeasons = createFeature({
  name: 'trophySeasons',
  reducer: createReducer(initialState),
  extraSelectors: ({ selectEntities }) => ({
    selectAll: createSelector(
      selectEntities,
      (entities: IYearEntities): Year[] =>
        Object.keys(entities)
          .map((key) => new Year(entities[key].data))
          .sort((a, b) => b.name.localeCompare(a.name))
    ),

    selectTrophySeasonByID: (id: string | null) =>
      createSelector(selectEntities, (entities: IYearEntities): Year | null =>
        !!id ? (entities[id] ? new Year(entities[id]) : null) : null
      ),

    selectRoutedTrophySeason: createSelector(
      selectEntities,
      selectRouteParams,
      (entities: IYearEntities, { id }): Year | null =>
        entities[id] ? new Year(entities[id].data) : null
    ),

    selectCurrentTrophySeason: createSelector(
      selectEntities,
      (entities: IYearEntities): Year | null => {
        const currentTrophySeason = new Date().getFullYear().toString();

        const trophySeasonEntity = Object.values(entities).filter(
          (entity) => entity.data.attributes.name === currentTrophySeason
        )[0];

        return trophySeasonEntity ? new Year(trophySeasonEntity.data) : null;
      }
    ),
  }),
});
