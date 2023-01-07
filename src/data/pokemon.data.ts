import { pokemonDataGen1 } from "./pokemon/gen1.data";
import { pokemonDataGen2 } from "./pokemon/gen2.data";
import { pokemonDataGen3 } from "./pokemon/gen3.data";
import { pokemonDataGen4 } from "./pokemon/gen4.data";
import { pokemonDataGen5 } from "./pokemon/gen5.data";
import { pokemonDataGen6 } from "./pokemon/gen6.data";
import { pokemonDataGen7 } from "./pokemon/gen7.data";
import { pokemonDataGen8 } from "./pokemon/gen8.data";
import { pokemonDataGen9 } from "./pokemon/gen9.data";
import { pokemonDataRegionals } from "./pokemon/regionals.data";

export const pokemonData = {
  ...pokemonDataGen1,
  ...pokemonDataGen2,
  ...pokemonDataGen3,
  ...pokemonDataGen4,
  ...pokemonDataGen5,
  ...pokemonDataGen6,
  ...pokemonDataGen7,
  ...pokemonDataGen8,
  ...pokemonDataGen9,
  ...pokemonDataRegionals
}
