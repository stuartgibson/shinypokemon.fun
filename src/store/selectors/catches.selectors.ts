import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Catch } from 'models/catch.model';

export const featureKey = 'catches';
export const selectFeature = createFeatureSelector<CatchesState>(featureKey);

export interface ICatchEntity {
  data: {
    type: string;
    id: string;
    attributes: {
      description:string;
      endDate:string;
      startDate:string;
      theme:string;
    };
    relationships: {
      competition: {
        data: {
          id: string;
          type: 'competition';
        }
      },
      pokemon: {
        data: {
          id: string;
          type: 'pokemon';
        }
      },
      user: {
        data: {
          id: string;
          type: 'user';
        }
      }
    }
  }
}

export interface CatchesState {
  entities: {[id: string]: ICatchEntity};
}

export const selectCatch = (id:string) => createSelector(
  selectFeature,
  (state: CatchesState):Catch|null =>
    state.entities[id] ? new Catch(state.entities[id]) : null
);

export const selectCatches = createSelector(
  selectFeature,
  (state: CatchesState):Catch[] =>
    Object.keys(state.entities).map((key) => new Catch(state.entities[key].data))
);
