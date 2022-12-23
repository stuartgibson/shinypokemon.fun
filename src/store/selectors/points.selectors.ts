import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { selectCurrentCompetition, selectRoutedCompetition } from './competition.selectors';

export const featureKey = 'points';
export const selectFeature = createFeatureSelector<PointsState>(featureKey);

export interface IPointEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      description:string;
      endDate:string;
      startDate:string;
      theme:string;
    };
    relationships: {
      competition: {
        data: {
          id: string;
          type: 'competition';
        }
      },
      pokemon: {
        data: {
          id: string;
          type: 'pokemon';
        }
      },
      user: {
        data: {
          id: string;
          type: 'user';
        }
      }
    }
  }
}

export interface PointsState {
  entities: {[id: string]: IPointEntity};
}

export const selectPoint = (id:string) => createSelector(
  selectFeature,
  (state: PointsState):Point|null =>
    state.entities[id] ? new Point(state.entities[id]) : null
);

export const selectPoints = createSelector(
  selectFeature,
  (state: PointsState):Point[] =>
    Object.keys(state.entities).map((key) => new Point(state.entities[key].data))
);

export const selectCurrentPoints = createSelector(
  selectCurrentCompetition,
  selectPoints,
  (competition:Competition|null, points: Point[]):Point[] =>
    !competition ? [] : points.filter((point) => point.competitionID === competition.id)
  );

export const selectRoutedCompetitionPoints = createSelector(
  selectRoutedCompetition,
  selectPoints,
  (competition:Competition|null, points: Point[]):Point[] =>
    !competition ? [] : points.filter((point) => point.competitionID === competition.id)
  );
