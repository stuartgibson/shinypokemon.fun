import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';

export const selectPokemon = createAction(
  '[Pokemon] Select',
  props<{
    pokemon: Pokemon
  }>()
);

export const unselectPokemon = createAction(
  '[Pokemon] Unselect',
  props<{
    pokemon: Pokemon
  }>()
);
