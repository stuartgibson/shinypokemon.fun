import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { TrophySeason } from 'models/trophy-season.model';
import { trophySeasonsData } from 'src/data/tophy-seasons.data';
import { IJsonApiEntity } from 'src/interfaces/json-api.interfaces';
import { selectRouteParams } from 'store/selectors/router.selectors';

interface ITrophySeasonEntity extends IJsonApiEntity {
  data: {
    type: 'trophySeason';
    id: string;
    attributes: {
      name: string;
    };
  };
}

interface ITrophySeasonEntities {
  [id: string]: ITrophySeasonEntity;
}

interface TrophySeasonsState {
  entities: ITrophySeasonEntities;
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
      (entities: ITrophySeasonEntities): TrophySeason[] =>
        Object.keys(entities)
          .map((key) => new TrophySeason(entities[key].data))
          .sort((a, b) => b.name.localeCompare(a.name))
    ),

    selectTrophySeasonByID: (id: string | null) =>
      createSelector(
        selectEntities,
        (entities: ITrophySeasonEntities): TrophySeason | null =>
          !!id ? (entities[id] ? new TrophySeason(entities[id]) : null) : null
      ),

    selectRoutedTrophySeason: createSelector(
      selectEntities,
      selectRouteParams,
      (entities: ITrophySeasonEntities, { id }): TrophySeason | null =>
        entities[id] ? new TrophySeason(entities[id].data) : null
    ),

    selectCurrentTrophySeason: createSelector(
      selectEntities,
      (entities: ITrophySeasonEntities): TrophySeason | null => {
        const currentTrophySeason = new Date().getFullYear().toString();

        const trophySeasonEntity = Object.values(entities).filter(
          (entity) => entity.data.attributes.name === currentTrophySeason
        )[0];

        return trophySeasonEntity
          ? new TrophySeason(trophySeasonEntity.data)
          : null;
      }
    ),
  }),
});

export const selectPreviousTrophySeasons = createSelector(
  TrophySeasons.selectAll,
  (trophySeasons: TrophySeason[]): TrophySeason[] =>
    trophySeasons.filter(
      (trophySeason) => trophySeason.name < new Date().getFullYear().toString()
    )
);
