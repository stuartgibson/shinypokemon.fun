import { createReducer } from '@ngrx/store';
import { pointsData } from 'src/data/points.data';
import { PointsState } from 'store/selectors/points.selectors';

export const initialState:PointsState = {
  entities: pointsData
}

export const pointsReducer = createReducer(
  initialState
);
