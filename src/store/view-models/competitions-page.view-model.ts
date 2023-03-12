import { createSelector } from "@ngrx/store";
import { Competition } from "models/competition.model";
import { Year } from "models/year.model";
import { Years } from "store/reducers";
import { Competitions } from "store/reducers/competitions.reducer";

export type YearDatum = {
  year:Year,
  competitionCount:number
}

export type CompetitionsPageViewModel = {
  yearsData:YearDatum[]
}

export const competitionsPageViewModel = createSelector(
  Years.selectAll,
  Competitions.selectAll,
  (
    years: Year[],
    competitions: Competition[]
  ):CompetitionsPageViewModel => {
    const rawData:{[id:string]:YearDatum} = {}

    competitions.forEach((competition) => {
      if(rawData[competition.yearID]) {
        rawData[competition.yearID].competitionCount++;
      } else {
        rawData[competition.yearID] = {
          year: years.find((year) => year.id === competition.yearID)!,
          competitionCount: 1
        }
      }
    });

    return {
      yearsData: Object.values(rawData).sort((a, b) => b.year.name.localeCompare(a.year.name))
    }
  }
);
