import { createSelector } from '@ngrx/store';
import { Year } from 'models/year.model';
import { TrophySeasons } from 'store/reducers';

export type TrophySeasonsPageViewModel = {
  trophySeasons: Year[];
};

export const trophySeasonsPageViewModel = createSelector(
  TrophySeasons.selectAll,
  (trophySeasons: Year[]): TrophySeasonsPageViewModel => {
    return {
      trophySeasons,
    };
  }
);
