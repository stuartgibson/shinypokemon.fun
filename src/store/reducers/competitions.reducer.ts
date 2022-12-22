import { createReducer } from '@ngrx/store';
import { competitionsData } from 'src/data/competitions.data';
import { CompetitionsState } from 'store/selectors/competition.selectors';

export const initialState:CompetitionsState = {
  entities: competitionsData
}

export const competitionsReducer = createReducer(
  initialState
);
