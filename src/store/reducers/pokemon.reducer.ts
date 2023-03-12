import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Competition } from 'models/competition.model';
import { Pokemon } from 'models/pokemon.model';
import { pokemonData } from 'src/data/pokemon.data';
import { IJsonApiEntity } from 'src/interfaces/json-api.interfaces';
import { PokemonActions } from 'store/actions';
import { Competitions } from './competitions.reducer';

export interface IPokemonEntity extends IJsonApiEntity {
  data: {
    type: 'pokemon';
    id: string;
    attributes: {
      dexNo: string;
      generation: number;
      name: string;
    }
  }
}

export interface IPokemonEntities {
  [id: string]: IPokemonEntity;
}

export interface PokemonState {
  entities: IPokemonEntities;
  selectedPokemonIDs: string[];
}

const initialState:PokemonState = {
  entities: pokemonData,
  selectedPokemonIDs: []
}

export const Pokemons = createFeature({
  name: 'pokemon',
  reducer: createReducer(
    initialState,
    on(
      PokemonActions.select,
      (state:PokemonState, { pokemon }) => ({
        ...state,
        selectedPokemonIDs: Array.from(new Set([...state.selectedPokemonIDs, pokemon.id]))

      })
    ),

    on(
      PokemonActions.unselect,
      (state:PokemonState, { pokemon }) => {
        const newIDs = state.selectedPokemonIDs.filter(id => id !== pokemon.id);
        return {
          ...state,
          selectedPokemonIDs: newIDs
        }
      }
    )
  ),
  extraSelectors: ({selectEntities, selectSelectedPokemonIDs}) => ({
    selectAll: createSelector(
      selectEntities,
      (entities: IPokemonEntities):Pokemon[] => {
        const pokemon = Object.keys(entities).map((key) => new Pokemon(entities[key].data));
        return sortPokemon(pokemon);
      }
    ),

    selectByID: (id:string) => createSelector(
      selectEntities,
      (entities: IPokemonEntities):Pokemon|null =>
        entities[id] ? new Pokemon(entities[id].data) : null
    ),

    selectSelectedPokemon: createSelector(
      selectSelectedPokemonIDs,
      selectEntities,
      (ids: string[], entities: IPokemonEntities):Pokemon[] =>
        ids.map((id) => new Pokemon(entities[id].data))
    ),

    selectUnselectedPokemon: createSelector(
      selectSelectedPokemonIDs,
      selectEntities,
      (ids: string[], entities: IPokemonEntities):Pokemon[] =>
        Object.keys(entities)
          .filter((id) => !ids.includes(id))
          .map((id) => new Pokemon(entities[id].data))
    ),

    selectFilteredRoutedCompetitionPokemon: createSelector(
      Competitions.selectRoutedCompetition,
      Competitions.selectSearchQuery,
      selectEntities,
      (competition:Competition|null, query:string, entities: IPokemonEntities):Pokemon[] => {
        if (!competition){ return [] };

        const normalizedQuery = query.trim().toLowerCase();
        const pokemonList:Pokemon[] =
          competition
            .validPokemonIDs
            .map((id) => new Pokemon(entities[id].data))
            .filter((pokemon) =>
              (pokemon
                .name
                .toLowerCase()
                .includes(normalizedQuery) ||
              pokemon
                .dexNo
                .includes(normalizedQuery)))

        return sortPokemon(pokemonList);
      }
    )
  })
});

const sortPokemon = (pokemon:Pokemon[]):Pokemon[] =>
  pokemon.sort((a, b) => a.dexNo.localeCompare(b.dexNo))
