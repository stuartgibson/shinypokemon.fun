import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { competitionsData } from 'src/data/competitions.data';
import {
  ICompetitionEntities,
  ICompetitionEntity,
} from './competitions.reducer';
import { TrophySeasons } from './trophy-seasons.reducer';

export interface TrophyCompetitionsState {
  entities: ICompetitionEntities;
}

const initialState: TrophyCompetitionsState = {
  entities: competitionsData,
};

export const TrophyCompetitions = createFeature({
  name: 'trophyCompetitions',
  reducer: createReducer(initialState),
  extraSelectors: ({ selectTrophyCompetitionsState, selectEntities }) => ({
    selectCompetitionsForRoutedSeason: createSelector(
      TrophySeasons.selectRoutedTrophySeason,
      selectEntities,
      (season: Year | null, entities: ICompetitionEntities): Competition[] => {
        if (!season) return [];

        const filteredEntities = Object.values(
          sortCompetitionsByDate(entities)
        ).filter(
          (entity) => entity.data.relationships.year.data.id === season.id
        );
        return instantiateEntities(filteredEntities);
      }
    ),
  }),
});

const sortCompetitionsByDate = (competitions: {
  [id: string]: ICompetitionEntity;
}): ICompetitionEntity[] =>
  Object.values(competitions).sort(
    (a: ICompetitionEntity, b: ICompetitionEntity) =>
      b.data.attributes.startDate.localeCompare(a.data.attributes.startDate)
  );

const instantiateEntities = (entities: ICompetitionEntity[]): Competition[] =>
  entities.map((entity) => new Competition(entity.data));
