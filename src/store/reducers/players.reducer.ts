import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { Player } from 'models/player.model';
import { playersData } from 'src/data/players.data';
import { IJsonApiEntity } from 'src/interfaces/json-api.interfaces';
import { selectRouteParams } from 'store/selectors/router.selectors';

export interface IPlayerEntity extends IJsonApiEntity {
  data: {
    type: 'player';
    id: string;
    attributes: {
      displayName: string;
      realName:string;
    };
  }
}

export interface IPlayerEntities {
  [id: string]: IPlayerEntity;
}

export interface PlayerState {
  entities: IPlayerEntities;
}

const initialState:PlayerState = {
  entities: playersData
}

export const Players = createFeature({
  name: 'players',
  reducer: createReducer(
    initialState,
  ),
  extraSelectors: ({selectEntities}) => ({
    selectAll: createSelector(
      selectEntities,
      (entities: IPlayerEntities):Player[] => {
        const players = Object.keys(entities).map((key) => new Player(entities[key].data));
        return sortPlayers(players);
      }
    ),

    selectByID: (id:string) => createSelector(
      selectEntities,
      (entities: IPlayerEntities):Player|null =>
        entities[id] ? new Player(entities[id].data) : null
    ),

    selectRoutedPlayer: createSelector(
      selectEntities,
      selectRouteParams,
      (entities: IPlayerEntities, { id }):Player|null =>
        entities[id] ? new Player(entities[id].data) : null
    )
  })
});

const sortPlayers = (players:Player[]):Player[] =>
  players.sort((a:Player, b:Player) =>
    a.realName.localeCompare(b.realName, 'en', { sensitivity: 'base' })
  )
