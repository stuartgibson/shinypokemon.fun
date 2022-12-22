import { YearsState } from 'store/selectors/year.selectors';
import { CompetitionsState } from './competition.selectors';
import { PokemonState } from './pokemon.selectors';

export interface AppState {
  competitions: CompetitionsState;
  pokemon: PokemonState;
  years: YearsState;
}
