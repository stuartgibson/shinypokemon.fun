import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { databaseString } from 'src/app/helpers/dates.helper';
import { trophyCompetitionsData } from 'src/data/trophy-competitions.data';
import { selectRouteParams } from 'store/selectors/router.selectors';
import {
  ICompetitionEntities,
  ICompetitionEntity,
} from './competitions.reducer';
import { TrophySeasons } from './trophy-seasons.reducer';

export interface TrophyCompetitionsState {
  entities: ICompetitionEntities;
}

const initialState: TrophyCompetitionsState = {
  entities: trophyCompetitionsData,
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

    selectCurrentCompetition: createSelector(
      selectEntities,
      (entities: ICompetitionEntities): Competition | null => {
        const currentDate = databaseString(new Date());
        const sortedCompetitions = sortCompetitionsByDate(entities);
        const competitionEntity = sortedCompetitions.filter(
          (competition) =>
            competition.data.attributes.startDate <= currentDate &&
            competition.data.attributes.endDate >= currentDate
        )[0];
        return competitionEntity
          ? new Competition(competitionEntity.data)
          : null;
      }
    ),

    selectRoutedTrophyCompetition: createSelector(
      selectEntities,
      selectRouteParams,
      (entities: ICompetitionEntities, { id }): Competition | null =>
        entities[id] ? new Competition(entities[id].data) : null
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
