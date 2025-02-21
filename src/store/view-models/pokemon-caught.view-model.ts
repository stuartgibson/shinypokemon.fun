import { createSelector } from "@ngrx/store";
import { Point } from "models/point.model";
import { Pokemon } from "models/pokemon.model";
import {  Points, Pokemons } from "store/reducers";

export type PokemonCaughtDatum = {
  pokemon: Pokemon,
  count: number
}

export type PokemonCaughtViewModel = {
  data: PokemonCaughtDatum[];
}

export const pokemonCaughtViewModel = createSelector(
  Pokemons.selectAll,
  Points.selectAll,
  (
    pokemons: Pokemon[],
    points: Point[]
  ):PokemonCaughtViewModel => {
    
    const data: PokemonCaughtDatum[] = [];
    const dataMap : {[pokemonId: string] : PokemonCaughtDatum } = {};

    for (const pokemon of pokemons) {
      const datum = {
        pokemon: pokemon,
        count: 0
      }

      data.push(datum);
      dataMap[pokemon.id] = datum;
    }

    for (const point of points) {
      dataMap[point.pokemonID].count += 1;
    }

    return {data: data};
  }
);
