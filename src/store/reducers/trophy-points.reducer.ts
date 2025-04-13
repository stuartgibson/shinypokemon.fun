import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { Year } from 'models/year.model';
import { trophyPointsData } from 'src/data/trophy-points.data';
import { IPointEntities, IPointEntity } from './points.reducer';
import { TrophyCompetitions } from './trophy-competitions.reducer';
import { TrophySeasons } from './trophy-seasons.reducer';

export interface ITrophyPointEntities {
  [id: string]: IPointEntity;
}

export interface TrophyPointsState {
  entities: IPointEntities;
  newPoints: IPointEntities;
}

const initialState: TrophyPointsState = {
  entities: trophyPointsData,
  newPoints: {},
};

export const TrophyPoints = createFeature({
  name: 'trophyPoints',
  reducer: createReducer(initialState),
  extraSelectors: ({ selectEntities, selectNewPoints }) => ({
    selectAll: createSelector(
      selectEntities,
      (entities: IPointEntities): Point[] =>
        Object.keys(entities).map((key) => new Point(entities[key].data))
    ),

    selectByID: (id: string) =>
      createSelector(selectEntities, (entities: IPointEntities): Point | null =>
        entities[id] ? new Point(entities[id]) : null
      ),

    selectRoutedTrophyCompetitionPoints: createSelector(
      TrophyCompetitions.selectRoutedTrophyCompetition,
      selectEntities,
      (competition: Competition | null, entities: IPointEntities): Point[] => {
        if (!competition) return [];

        return Object.values(entities)
          .filter(
            (point) =>
              point.data.relationships.competition.data.id === competition.id
          )
          .map((point) => new Point(point.data));
      }
    ),

    selectRoutedTrophySeasonPoints: createSelector(
      TrophySeasons.selectRoutedTrophySeason,
      TrophyCompetitions.selectCompetitionsForRoutedSeason,
      selectEntities,
      (
        year: Year | null,
        competition: Competition[],
        entities: IPointEntities
      ): Point[] => {
        if (!year) return [];

        const competitionIDs = competition.map((c) => c.id);

        return Object.values(entities)
          .filter((point) =>
            competitionIDs.includes(
              point.data.relationships.competition.data.id
            )
          )
          .map((point) => new Point(point.data));
      }
    ),
  }),
});
