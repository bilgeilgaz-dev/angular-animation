import { RelationsState, initialRelationsState } from '../store/relations.interface';
import { RelationsAction, RelationsActionTypes } from '../action/relations.actions';
import { AppState } from '../store/application-state.interface';

export const selectRelations = (state: AppState) => state.relations.data;
export const selectRelationsError = (state: AppState) => state.relations.error;

export function relationsReducer(state: RelationsState = initialRelationsState, action: RelationsAction): RelationsState {
    switch (action.type) {
        case RelationsActionTypes.LoadRelations:
            return {
                data: action.payload.relations,
                error: null
            };

        case RelationsActionTypes.RelationsError:
            return {
                data: null,
                error: action.payload.error
            };
  
      default:
        return state;
    }
  }