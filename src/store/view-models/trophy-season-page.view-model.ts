import { createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { TrophySeasons } from 'store/reducers';
import { TrophyCompetitions } from 'store/reducers/trophy-competitions.reducer';

export type TrophySeasonPageViewModel = {
  competitions: Competition[];
  trophySeason: Year | null;
};

// const competitionHasStarted = (competition: Competition) =>
//   competition.startDate <= new Date();

export const trophySeasonPageViewModel = createSelector(
  TrophyCompetitions.selectCompetitionsForRoutedSeason,
  TrophySeasons.selectRoutedTrophySeason,
  (
    competitions: Competition[],
    trophySeason: Year | null
  ): TrophySeasonPageViewModel => {
    return {
      competitions: competitions,
      trophySeason: trophySeason,
    };
  }
);
