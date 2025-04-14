import { createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Player } from 'models/player.model';
import { Point } from 'models/point.model';
import { Year } from 'models/year.model';
import { Players, TrophyPoints, TrophySeasons } from 'store/reducers';
import { TrophyCompetitions } from 'store/reducers/trophy-competitions.reducer';
import { YearPointsDatum } from './year-page.view-model';

export type TrophySeasonPageViewModel = {
  competitions: Competition[];
  pointsData: YearPointsDatum[];
  trophySeason: Year | null;
};

export const trophySeasonPageViewModel = createSelector(
  Players.selectAll,
  TrophyCompetitions.selectCompetitionsForRoutedSeason,
  TrophyPoints.selectRoutedTrophySeasonPoints,
  TrophySeasons.selectRoutedTrophySeason,
  (
    players: Player[],
    competitions: Competition[],
    points: Point[],
    trophySeason: Year | null
  ): TrophySeasonPageViewModel => {
    const pointsData: { [id: string]: YearPointsDatum } = {};

    points.forEach((point: Point) => {
      if (pointsData[point.playerID]) {
        pointsData[point.playerID].totalPoints += point.value ?? 1;
        pointsData[point.playerID].successfulHunts.push(point.competitionID);
        pointsData[point.playerID].successfulHunts = [
          ...new Set(pointsData[point.playerID].successfulHunts),
        ];
        pointsData[point.playerID].successfulHuntsCount =
          pointsData[point.playerID].successfulHunts.length;
      } else {
        pointsData[point.playerID] = {
          player: players.find(
            (player: Player) => player.id === point.playerID
          )!,
          totalPoints: point.value ?? 1,
          successfulHunts: [point.competitionID],
          successfulHuntsCount: 1,
        };
      }
    });

    return {
      competitions,
      trophySeason,
      pointsData: Object.values(pointsData).sort(
        (a, b) => b.totalPoints - a.totalPoints
      ),
    };
  }
);
