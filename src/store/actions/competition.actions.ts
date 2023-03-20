import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICompetitionEntity } from 'store/reducers';

export const CompetitionActions = createActionGroup({
  source: 'Filter Competition Pokemon',
  events: {
    'Add': props<{ competition:ICompetitionEntity }>(),
    'Filter': props<{ query:string }>(),
    'Clear': emptyProps()
  }
})
