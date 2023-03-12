import { createSelector } from "@ngrx/store";
import { Competition } from "models/competition.model";
import { Player } from "models/player.model";
import { Point } from "models/point.model";
import { Year } from "models/year.model";
import { Players, Points, Years } from "store/reducers";
import { Competitions } from "store/reducers/competitions.reducer";

export type YearPointsDatum = {
  player: Player;
  totalPoints: number;
  successfulHunts: string[];
  successfulHuntsCount: number;
}

export type YearPageViewModel = {
  competitions: Competition[];
  competitionCount: number;
  year: Year|null;
  yearPointsData: YearPointsDatum[];
}


export const yearPageViewModel = createSelector(
  Competitions.selectCompetitionsForRoutedYear,
  Players.selectAll,
  Points.selectRoutedYearPoints,
  Years.selectRoutedYear,
  (
    competitions: Competition[],
    players: Player[],
    points: Point[],
    year: Year|null
  ):YearPageViewModel => {

    const yearPointsData:{[id:string]:YearPointsDatum} = {};

    points.forEach((point:Point) => {
      if(yearPointsData[point.playerID]) {
        yearPointsData[point.playerID].totalPoints += 1;
        yearPointsData[point.playerID].successfulHunts.push(point.competitionID);
        yearPointsData[point.playerID].successfulHunts = [...new Set(yearPointsData[point.playerID].successfulHunts)];
        yearPointsData[point.playerID].successfulHuntsCount = yearPointsData[point.playerID].successfulHunts.length;
      } else {
        yearPointsData[point.playerID] = {
          player: players.find((player:Player) => player.id === point.playerID)!,
          totalPoints: 1,
          successfulHunts: [point.competitionID],
          successfulHuntsCount: 1
        }
      }
    });

    return {
      competitions: competitions,
      competitionCount: competitions.length,
      year: year,
      yearPointsData: Object.values(yearPointsData).sort((a, b) => b.totalPoints - a.totalPoints)
    }
  }
);
