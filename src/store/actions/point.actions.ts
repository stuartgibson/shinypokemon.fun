import { createAction, props } from '@ngrx/store';
import { IPointEntity } from 'store/selectors/points.selectors';

export const addPoint = createAction(
  '[Point] Add',
  props<{
    point: IPointEntity
  }>()
);

export const clearPoints = createAction(
  '[Point] Clear'
);
