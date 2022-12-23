import { RouterState } from '@ngrx/router-store';
import { YearsState } from 'store/selectors/year.selectors';
import { CompetitionsState } from './competition.selectors';
import { PointsState } from './points.selectors';
import { PokemonState } from './pokemon.selectors';

export interface AppState {
  points: PointsState;
  competitions: CompetitionsState;
  pokemon: PokemonState;
  router: RouterState;
  years: YearsState;
}
