import { createReducer, on } from '@ngrx/store';
import { pointsData } from 'src/data/points.data';
import { PointActions } from 'store/actions';
import { PointsState } from 'store/selectors/points.selectors';

export const initialState:PointsState = {
  entities: pointsData,
  newPoints: {}
}

export const pointsReducer = createReducer(
  initialState,

  on(
    PointActions.addPoint,
    (state:PointsState, { point }) => {

      return {
        ...state,
        newPoints: {
          ...state.newPoints,
          [point.data.id]: point
        }
      }
    }
  ),
);
