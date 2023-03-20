import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Year } from 'models/year.model';
import { databaseString } from 'src/app/helpers/dates.helper';
import { competitionsData } from 'src/data/competitions.data';
import { IJsonApiEntity, IJsonApiRelationship } from 'src/interfaces/json-api.interfaces';
import { CompetitionActions } from 'store/actions/competition.actions';
import { selectRouteParams } from 'store/selectors/router.selectors';
import { Years } from './years.reducer';

export interface ICompetitionEntity extends IJsonApiEntity {
  data: {
    type: 'competition';
    id: string;
    attributes: {
      description:string;
      endDate:string;
      startDate:string;
      theme:string;
    };
    relationships: {
      selectedBy?: IJsonApiRelationship,
      validPokemon: IJsonApiRelationship[],
      year: IJsonApiRelationship,
    }
  }
}

interface ICompetitionEntities {
  [id: string]: ICompetitionEntity;
}

export interface CompetitionsState {
  entities: ICompetitionEntities;
  newCompetition:ICompetitionEntity|null;
  searchQuery: string;
}

const initialState:CompetitionsState = {
  entities: competitionsData,
  newCompetition: null,
  searchQuery: ''
}

export const Competitions = createFeature({
  name: 'competitions',
  reducer: createReducer(
    initialState,
    on(
      CompetitionActions.add,
      (state:CompetitionsState, { competition }) => (
        {
          ...state,
          newCompetition: competition,
        }
      )
    ),
    on(
      CompetitionActions.filter,
      (state:CompetitionsState, {query}) => ({...state, searchQuery: query})
    ),
    on(
      CompetitionActions.clear,
      (state:CompetitionsState) => ({...state, searchQuery: ''})
    )
  ),
  extraSelectors: ({selectCompetitionsState, selectEntities}) => ({
    selectNewCompetition: createSelector(
      selectCompetitionsState,
      (state:CompetitionsState) => state.newCompetition ? new Competition(state.newCompetition.data) : null
    ),
    selectAll: createSelector(
      selectEntities,
      (entities:ICompetitionEntities):Competition[] =>
        instantiateEntities(sortCompetitionsByDate(entities))
    ),

    selectByID: (id:string) => createSelector(
      selectEntities,
      (entities:ICompetitionEntities):Competition|null =>
        entities[id] ? new Competition(entities[id].data) : null
    ),

    selectRoutedCompetition: createSelector(
      selectEntities,
      selectRouteParams,
      (entities:ICompetitionEntities, {id}):Competition|null =>
        entities[id] ? new Competition(entities[id].data) : null
    ),

    selectCurrentCompetition: createSelector(
      selectEntities,
      (entities:ICompetitionEntities):Competition|null => {
        const currentDate = databaseString(new Date);
        const sortedCompetitions = sortCompetitionsByDate(entities);
        const competitionEntity = sortedCompetitions.filter((competition) =>
          competition.data.attributes.startDate <= currentDate &&
          competition.data.attributes.endDate >= currentDate)[0];
        return competitionEntity ? new Competition(competitionEntity.data) : null;
      }
    ),

    selectNextCompetition: createSelector(
      selectEntities,
      (entities:ICompetitionEntities):Competition|null => {
        const currentDate = databaseString(new Date);
        const sortedCompetitions = sortCompetitionsByDate(entities);
        const competitionEntity = sortedCompetitions.filter((competition) =>
          competition.data.attributes.startDate > currentDate)[0];
        return competitionEntity ? new Competition(competitionEntity.data) : null;
    }),

    selectCompetitionsForYear: (yearID:string|null) => createSelector(
      Years.selectYearByID(yearID),
      selectEntities,
      (year: Year|null, entities:ICompetitionEntities):Competition[] => {
        if( !year ) return [];
        const filteredEntities = Object.values(sortCompetitionsByDate(entities)).filter((entity) =>
          entity.data.relationships.year.data.id === year.id);
        return instantiateEntities(filteredEntities);
      }
    ),

    selectCompetitionsForRoutedYear: createSelector(
      Years.selectRoutedYear,
      selectEntities,
      (year: Year|null, entities:ICompetitionEntities):Competition[] => {
        if( !year ) return [];
        const filteredEntities = Object.values(sortCompetitionsByDate(entities)).filter((entity) =>
          entity.data.relationships.year.data.id === year.id);
        return instantiateEntities(filteredEntities);
      }
    ),

    selectCompetitionsForCurrentYear: createSelector(
      Years.selectCurrentYear,
      selectEntities,
      (year: Year|null, entities:ICompetitionEntities):Competition[] => {
        if( !year ) return [];
        const filteredEntities = Object.values(sortCompetitionsByDate(entities)).filter((entity) =>
          entity.data.relationships.year.data.id === year.id);
        return instantiateEntities(filteredEntities);
      }
    ),

    selectPreviousCompetitionsForCurrentYear: createSelector(
      Years.selectCurrentYear,
      selectEntities,
      (year: Year|null, entities:ICompetitionEntities):Competition[] => {
        if( !year ) return [];
        const filteredEntities =
          Object
            .values(sortCompetitionsByDate(entities))
            .filter((entity) =>
              entity.data.relationships.year.data.id === year.id)
            .filter((entity) =>
              entity.data.attributes.endDate < databaseString(new Date));
        return instantiateEntities(filteredEntities);
      }
    )
  })
})

const sortCompetitionsByDate = (competitions:{[id:string]:ICompetitionEntity}):ICompetitionEntity[] =>
    Object.values(competitions).sort((a:ICompetitionEntity, b:ICompetitionEntity) =>
    b.data.attributes.startDate.localeCompare(a.data.attributes.startDate)
  );

const instantiateEntities = (entities:ICompetitionEntity[]):Competition[] =>
  entities.map((entity) => new Competition(entity.data));
