import { createActionGroup, props } from '@ngrx/store';
import { IPointEntity } from 'store/reducers';

export const PointActions = createActionGroup({
  source: 'Point',
  events: {
    'Add': props<{ point: IPointEntity }>(),
    'Clear': props<{ point: IPointEntity }>()
  }
})
