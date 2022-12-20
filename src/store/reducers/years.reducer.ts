import { createReducer, on } from '@ngrx/store';
import { yearsData } from 'src/data/years.data';
import { YearsState } from 'store/selectors/year.selectors';

export const initialState:YearsState = {
  entities: yearsData
}

export const yearsReducer = createReducer(
  initialState
);
