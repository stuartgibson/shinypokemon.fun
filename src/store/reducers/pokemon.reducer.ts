import { createReducer } from '@ngrx/store';
import { pokemonData } from 'src/data/pokemon.data';
import { PokemonState } from 'store/selectors/pokemon.selectors';

export const initialState:PokemonState = {
  entities: pokemonData
}

export const pokemonReducer = createReducer(
  initialState
);
