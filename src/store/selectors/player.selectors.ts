import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Player } from 'models/player.model';
import { selectRouteParams } from './router.selectors';

export const featureKey = 'players';
export const selectFeature = createFeatureSelector<PlayersState>(featureKey);

export interface IPlayerEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      displayName: string;
      realName:string;
    };
  }
}

export interface PlayersState {
  entities: {[id: string]: IPlayerEntity};
}

export const selectPlayers = createSelector(
  selectFeature,
  (state: PlayersState):Player[] => {
    const players = Object.keys(state.entities).map((key) => new Player(state.entities[key].data));
    return players.sort((a:Player, b:Player) =>
      a.realName.localeCompare(b.realName, 'en', { sensitivity: 'base' })
    );
  }
);

export const selectPlayer = (id:string) => createSelector(
  selectFeature,
  (state: PlayersState):Player|null =>
    state.entities[id] ? new Player(state.entities[id]) : null
);

export const selectRoutedPlayer = createSelector(
  selectFeature,
  selectRouteParams,
  (state: PlayersState, { id }):Player|null =>
    state.entities[id] ? new Player(state.entities[id].data) : null
);
