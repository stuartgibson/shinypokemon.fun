import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TrophyCompetitionActions = createActionGroup({
  source: 'Filter Trophy Competition Pokemon',
  events: {
    Filter: props<{ query: string }>(),
    Clear: emptyProps(),
  },
});
