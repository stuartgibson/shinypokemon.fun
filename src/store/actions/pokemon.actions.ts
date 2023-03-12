import { createActionGroup, props } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';

export const PokemonActions = createActionGroup({
  source: 'Pokemon',
  events: {
    'Select': props<{ pokemon: Pokemon }>(),
    'Unselect': props<{ pokemon: Pokemon }>()
  }
})
