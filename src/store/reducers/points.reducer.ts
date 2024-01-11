import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Point } from 'models/point.model';
import { Year } from 'models/year.model';
import { pointsData } from 'src/data/points.data';
import { IJsonApiEntity, IJsonApiRelationship } from 'src/interfaces/json-api.interfaces';
import { PointActions } from 'store/actions';
import { BallType } from 'types/ball.types';
import { GameType } from 'types/game.types';
import { MethodType } from 'types/method.types';
import { Competitions } from './competitions.reducer';
import { Years } from './years.reducer';

export interface IPointEntity extends IJsonApiEntity {
  data: {
    type: 'point';
    id: string;
    attributes: {
      ball:BallType|null;
      catchDate:string|null;
      firstCatch:boolean;
      game:GameType|null;
      method:MethodType|null;
      oldSystemPoint?:boolean;
    };
    relationships: {
      competition: IJsonApiRelationship
      pokemon: IJsonApiRelationship,
      player: IJsonApiRelationship
    }
  }
}

export interface IPointEntities {
  [id: string]: IPointEntity;
}

export interface PointsState {
  entities: IPointEntities;
  newPoints: IPointEntities;
}

export const initialState:PointsState = {
  entities: pointsData,
  newPoints: {}
}

export const Points = createFeature({
  name: 'points',
  reducer: createReducer(
    initialState,
    on(
      PointActions.add,
      (state:PointsState, { point }) => (
        {
          ...state,
          newPoints: {
            ...state.newPoints,
            [point.data.id]: point
          }
        }
      )
    )
  ),
  extraSelectors: ({selectEntities, selectNewPoints}) => ({
    selectAll: createSelector(
      selectEntities,
      (entities:IPointEntities):Point[] =>
        Object.keys(entities).map((key) => new Point(entities[key].data))
    ),

    selectByID: (id:string) => createSelector(
      selectEntities,
      (entities:IPointEntities):Point|null =>
        entities[id] ? new Point(entities[id]) : null
    ),

    selectCurrentPoints: createSelector(
      Competitions.selectCurrentCompetition,
      selectEntities,
      (competition:Competition|null, entities:IPointEntities):Point[] => {
        if( !competition ) return [];

        return Object
          .values(entities)
          .filter((point) => point.data.relationships.competition.data.id === competition.id)
          .map((point) => new Point(point.data))
    }),

    selectRoutedCompetitionPoints: createSelector(
      Competitions.selectRoutedCompetition,
      selectEntities,
      (competition:Competition|null, entities:IPointEntities):Point[] => {
        if( !competition ) return [];

        return Object
          .values(entities)
          .filter((point) => point.data.relationships.competition.data.id === competition.id)
          .map((point) => new Point(point.data))
      }
    ),

    selectRoutedYearPoints: createSelector(
      Years.selectRoutedYear,
      Competitions.selectCompetitionsForRoutedYear,
      selectEntities,
      (year:Year|null, competition:Competition[], entities:IPointEntities):Point[] => {
        if( !year ) return [];

        const competitionIDs = competition.map((c) => c.id);

        return Object
          .values(entities)
          .filter((point) => competitionIDs.includes(point.data.relationships.competition.data.id) )
          .map((point) => new Point(point.data))
      }
    ),

    selectPendingPoints: createSelector(
      selectNewPoints,
      (entities:IPointEntities):Point[] =>
        Object.keys(entities).map((key) => new Point(entities[key].data))
    )
  })
});
