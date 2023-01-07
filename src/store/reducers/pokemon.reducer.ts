import { createReducer, on } from '@ngrx/store';
import { pokemonData } from 'src/data/pokemon.data';
import { PokemonActions } from 'store/actions';
import { PokemonState } from 'store/selectors/pokemon.selectors';

export const initialState:PokemonState = {
  entities: pokemonData,
  selectedPokemonIDs: []
}

export const pokemonReducer = createReducer(
  initialState,

  on(
    PokemonActions.selectPokemon,
    (state:PokemonState, { pokemon }) => ({
      ...state,
      selectedPokemonIDs: Array.from(new Set([...state.selectedPokemonIDs, pokemon.id]))

    })
  ),

  on(
    PokemonActions.unselectPokemon,
    (state:PokemonState, { pokemon }) => {
      const newIDs = state.selectedPokemonIDs.filter(id => id !== pokemon.id);
      return {
        ...state,
        selectedPokemonIDs: newIDs
      }
    }
  )
);
