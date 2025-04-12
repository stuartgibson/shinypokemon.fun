import { createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Player } from 'models/player.model';
import { Point } from 'models/point.model';
import { TrophySeason } from 'models/trophy-season.model';
import { Players, Points } from 'store/reducers';
import { Competitions } from 'store/reducers/competitions.reducer';
import { TrophySeasons } from 'store/reducers/trophy-seasons.reducer';

export type TrophySeasonPointsDatum = {
  player: Player;
  totalPoints: number;
  successfulHunts: string[];
  successfulHuntsCount: number;
};

export type TrophySeasonPageViewModel = {
  competitions: Competition[];
  competitionCount: number;
  trophySeason: TrophySeason | null;
  trophySeasonPointsData: TrophySeasonPointsDatum[];
};

const competitionHasStarted = (competition: Competition) =>
  competition.startDate <= new Date();

export const trophySeasonPageViewModel = createSelector(
  Competitions.selectCompetitionsForRoutedYear,
  Players.selectAll,
  Points.selectRoutedYearPoints,
  TrophySeasons.selectRoutedTrophySeason,
  (
    competitions: Competition[],
    players: Player[],
    points: Point[],
    trophySeason: TrophySeason | null
  ): TrophySeasonPageViewModel => {
    const trophySeasonPointsData: { [id: string]: TrophySeasonPointsDatum } =
      {};

    points.forEach((point: Point) => {
      if (trophySeasonPointsData[point.playerID]) {
        trophySeasonPointsData[point.playerID].totalPoints += 1;
        trophySeasonPointsData[point.playerID].successfulHunts.push(
          point.competitionID
        );
        trophySeasonPointsData[point.playerID].successfulHunts = [
          ...new Set(trophySeasonPointsData[point.playerID].successfulHunts),
        ];
        trophySeasonPointsData[point.playerID].successfulHuntsCount =
          trophySeasonPointsData[point.playerID].successfulHunts.length;
      } else {
        trophySeasonPointsData[point.playerID] = {
          player: players.find(
            (player: Player) => player.id === point.playerID
          )!,
          totalPoints: 1,
          successfulHunts: [point.competitionID],
          successfulHuntsCount: 1,
        };
      }
    });

    return {
      competitions: competitions,
      competitionCount: competitions.filter(competitionHasStarted).length,
      trophySeason: trophySeason,
      trophySeasonPointsData: Object.values(trophySeasonPointsData).sort(
        (a, b) => b.totalPoints - a.totalPoints
      ),
    };
  }
);
