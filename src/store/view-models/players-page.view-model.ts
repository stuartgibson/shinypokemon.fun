import { createSelector } from "@ngrx/store";
import { Player } from "models/player.model";
import { Point } from "models/point.model";
import { Players, Points } from "store/reducers";

export type PlayerDatum = {
  player: Player;
  totalPoints: number;
  totalWins: number;
}

export type PlayersPageViewModel = {
  playersData: PlayerDatum[];
}

export const playersPageViewModel = createSelector(
  Players.selectAll,
  Points.selectAll,
  (
    players: Player[],
    points: Point[],
  ):PlayersPageViewModel => {

    const rawData:{[playerID:string]: PlayerDatum} = {};

    points.forEach((point:Point) => {
      if(rawData[point.playerID]) {
        rawData[point.playerID].totalPoints += 1;
        if(point.firstCatch) {
          rawData[point.playerID].totalWins += 1;
        }
      } else {
        rawData[point.playerID] = {
          player: players.find((player:Player) => player.id === point.playerID)!,
          totalPoints: 1,
          totalWins: point.firstCatch ? 1 : 0
        }
      }
    });

    return {
      playersData: Object.values(rawData).sort((a:PlayerDatum, b:PlayerDatum) => a.player.realName.localeCompare(b.player.realName))
    }
  }
);
