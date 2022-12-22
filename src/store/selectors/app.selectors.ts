import { RouterState } from '@ngrx/router-store';
import { YearsState } from 'store/selectors/year.selectors';
import { CatchesState } from './catches.selectors';
import { CompetitionsState } from './competition.selectors';
import { PokemonState } from './pokemon.selectors';

export interface AppState {
  catches: CatchesState;
  competitions: CompetitionsState;
  pokemon: PokemonState;
  router: RouterState;
  years: YearsState;
}
