import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { selectRouteParams } from './router.selectors';
import { selectCurrentYear, selectRoutedYear, selectYear } from './year.selectors';

export const featureKey = 'competitions';
export const selectFeature = createFeatureSelector<CompetitionsState>(featureKey);

export interface ICompetitionEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      description:string;
      endDate:string;
      startDate:string;
      theme:string;
    };
    relationships: {
      year: {
        data: {
          id: string;
          type: string;
        }
      }
    }
  }
}

export interface CompetitionsState {
  entities: {[id: string]: ICompetitionEntity};
}

export const selectCompetitions = createSelector(
  selectFeature,
  (state: CompetitionsState):Competition[] => {
    const competitions = Object.keys(state.entities).map((key) => new Competition(state.entities[key].data));
    return competitions.sort((a:Competition, b:Competition) =>
      b.startDate.getTime() - a.startDate.getTime()
    );
  }
);

export const selectCompetition = (id:string) => createSelector(
  selectFeature,
  (state: CompetitionsState):Competition|null =>
    state.entities[id] ? new Competition(state.entities[id]) : null
);

export const selectRoutedCompetition = createSelector(
  selectFeature,
  selectRouteParams,
  (state: CompetitionsState, { id }):Competition|null =>
    state.entities[id] ? new Competition(state.entities[id].data) : null
);

export const selectCurrentCompetition = createSelector(
  selectCompetitions,
  (competitions: Competition[]):Competition|null =>
    competitions.filter((competition) => competition.startDate <= new Date() && competition.endDate >= new Date())[0]
);

export const selectCompetitionsForYear = (yearID:string|null) => createSelector(
  selectYear(yearID),
  selectCompetitions,
  (year: Year|null, competitions:Competition[]):Competition[] =>
    !year ? [] : competitions.filter((competition) => competition.yearID === year.id)
);

export const selectCompetitionsForRoutedYear = createSelector(
  selectRoutedYear,
  selectCompetitions,
  (year: Year|null, competitions:Competition[]):Competition[] =>
    !year ? [] : competitions.filter((competition) => competition.yearID === year.id)
);

export const selectCompetitionsForCurrentYear = createSelector(
  selectCurrentYear,
  selectCompetitions,
  (year: Year|null, competitions:Competition[]):Competition[] =>
    !year ? [] : competitions.filter((competition) => competition.yearID === year.id)
  );

 export const selectPreviousCompetitionsForCurrentYear = createSelector(
    selectCompetitionsForCurrentYear,
    (competitions:Competition[]):Competition[] =>
      competitions.slice(1)
  );
