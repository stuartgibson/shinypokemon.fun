import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { BallType } from 'src/types/ball.types';
import { GameType } from 'src/types/game.types';
import { MethodType } from 'src/types/method.types';
import { selectCurrentCompetition, selectRoutedCompetition } from './competition.selectors';

export const featureKey = 'points';
export const selectFeature = createFeatureSelector<PointsState>(featureKey);

export interface IPointEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      ball:BallType|null;
      catchDate:string|null;
      game:GameType|null;
      method:MethodType|null;
    };
    relationships: {
      competition: {
        data: {
          id: string;
          type: string;
        }
      },
      pokemon: {
        data: {
          id: string;
          type: string;
        }
      },
      player: {
        data: {
          id: string;
          type: string;
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
