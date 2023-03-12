import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CompetitionActions = createActionGroup({
  source: 'Filter Competition Pokemon',
  events: {
    'Filter': props<{ query:string }>(),
    'Clear': emptyProps()
  }
})
