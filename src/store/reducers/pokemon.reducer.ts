import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Pokemon } from 'models/pokemon.model';
import { pokemonData } from 'src/data/pokemon.data';
import { IJsonApiEntity } from 'src/interfaces/json-api.interfaces';
import { PokemonActions } from 'store/actions';
import { Competitions } from './competitions.reducer';
import { TrophyCompetitions } from './trophy-competitions.reducer';

export interface IPokemonEntity extends IJsonApiEntity {
  data: {
    type: 'pokemon';
    id: string;
    attributes: {
      dexNo: string;
      generation: number;
      name: string;
      forme?: string;
    };
  };
}

export interface IPokemonEntities {
  [id: string]: IPokemonEntity;
}

export interface PokemonState {
  entities: IPokemonEntities;
  selectedPokemonIDs: string[];
  searchQuery: string;
}

const initialState: PokemonState = {
  entities: pokemonData,
  selectedPokemonIDs: [],
  searchQuery: '',
};

export const Pokemons = createFeature({
  name: 'pokemon',
  reducer: createReducer(
    initialState,
    on(PokemonActions.select, (state: PokemonState, { pokemon }) => ({
      ...state,
      selectedPokemonIDs: Array.from(
        new Set([...state.selectedPokemonIDs, pokemon.id])
      ),
    })),

    on(PokemonActions.unselect, (state: PokemonState, { pokemon }) => {
      const newIDs = state.selectedPokemonIDs.filter((id) => id !== pokemon.id);
      return {
        ...state,
        selectedPokemonIDs: newIDs,
      };
    }),

    on(PokemonActions.filter, (state: PokemonState, { query }) => ({
      ...state,
      searchQuery: query,
    }))
  ),
  extraSelectors: ({
    selectEntities,
    selectSelectedPokemonIDs,
    selectSearchQuery,
  }) => ({
    selectAll: createSelector(
      selectEntities,
      (entities: IPokemonEntities): Pokemon[] => {
        const pokemon = Object.keys(entities).map(
          (key) => new Pokemon(entities[key].data)
        );
        return sortPokemon(pokemon);
      }
    ),

    selectByID: (id: string) =>
      createSelector(
        selectEntities,
        (entities: IPokemonEntities): Pokemon | null =>
          entities[id] ? new Pokemon(entities[id].data) : null
      ),

    selectSelectedPokemon: createSelector(
      selectSelectedPokemonIDs,
      selectEntities,
      (ids: string[], entities: IPokemonEntities): Pokemon[] =>
        ids.map((id) => new Pokemon(entities[id].data))
    ),

    selectUnselectedPokemon: createSelector(
      selectSelectedPokemonIDs,
      selectEntities,
      selectSearchQuery,
      (ids: string[], entities: IPokemonEntities, query: string): Pokemon[] => {
        const filter = createPokemonFilter(query);

        return Object.keys(entities)
          .filter((id) => !ids.includes(id))
          .map((id) => new Pokemon(entities[id].data))
          .filter(filter);
      }
    ),

    selectFilteredRoutedCompetitionPokemon: createSelector(
      Competitions.selectRoutedCompetition,
      Competitions.selectSearchQuery,
      selectEntities,
      (
        competition: Competition | null,
        query: string,
        entities: IPokemonEntities
      ): Pokemon[] => {
        if (!competition) {
          return [];
        }

        const filter = createPokemonFilter(query);
        const pokemonList: Pokemon[] = competition.validPokemonIDs
          .map((id) => new Pokemon(entities[id].data))
          .filter(filter);

        return sortPokemon(pokemonList);
      }
    ),
    selectFilteredRoutedTrophyCompetitionPokemon: createSelector(
      TrophyCompetitions.selectRoutedTrophyCompetition,
      TrophyCompetitions.selectSearchQuery,
      selectEntities,
      (
        competition: Competition | null,
        query: string,
        entities: IPokemonEntities
      ): Pokemon[] => {
        if (!competition) {
          return [];
        }

        const filter = createPokemonFilter(query);
        const pokemonList: Pokemon[] = competition.validPokemonIDs
          .map((id) => new Pokemon(entities[id].data))
          .filter(filter);

        return sortPokemon(pokemonList);
      }
    ),
  }),
});

const sortPokemon = (pokemon: Pokemon[]): Pokemon[] =>
  pokemon.sort((a, b) => a.dexNo.localeCompare(b.dexNo));

const createPokemonFilter = (
  query: string
): ((pokemon: Pokemon) => boolean) => {
  const normalizedQuery = query.trim().toLowerCase();

  return (pokemon: Pokemon): boolean =>
    pokemon.name.toLowerCase().includes(normalizedQuery) ||
    pokemon.dexNo.includes(normalizedQuery);
};
