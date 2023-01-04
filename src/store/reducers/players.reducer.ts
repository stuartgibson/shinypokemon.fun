import { createReducer } from '@ngrx/store';
import { playersData } from 'src/data/players.data';
import { PlayersState } from 'store/selectors/player.selectors';

export const initialState:PlayersState = {
  entities: playersData
}

export const playersReducer = createReducer(
  initialState
);
