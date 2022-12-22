import { createReducer } from '@ngrx/store';
import { catchesData } from 'src/data/catches.data';
import { CatchesState } from 'store/selectors/catches.selectors';

export const initialState:CatchesState = {
  entities: catchesData
}

export const catchesReducer = createReducer(
  initialState
);
