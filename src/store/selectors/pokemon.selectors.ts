import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pokemon } from 'models/pokemon.model';

export const featureKey = 'pokemon';
export const selectFeature = createFeatureSelector<PokemonState>(featureKey);

export interface IPokemonEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      dexNo: string;
      generation: number;
      name: string;
    }
  }
}

export interface PokemonState {
  entities: {[id: string]: IPokemonEntity};
}

export const selectPokemon = (id:string) => createSelector(
  selectFeature,
  (state: PokemonState):Pokemon|null =>
    state.entities[id] ? new Pokemon(state.entities[id]) : null
);

export const selectAllPokemon = createSelector(
  selectFeature,
  (state: PokemonState):Pokemon[] => {
    const pokemon = Object.keys(state.entities).map((key) => new Pokemon(state.entities[key].data));
    return pokemon.sort((a, b) => b.dexNo.localeCompare(a.dexNo));
  }
);
