import { RequestsState, initialRequestsState } from '../store/requests.interface';
import { RequestsAction, RequestsActionTypes } from '../action/requests.actions';
import { AppState } from '../store/application-state.interface';

export const selectRequests = (state: AppState) => state.requests.data;
export const selectRequestsError = (state: AppState) => state.requests.error;

export function requestsReducer(state: RequestsState = initialRequestsState, action: RequestsAction): RequestsState {
    switch (action.type) {
        case RequestsActionTypes.LoadRequests:
            return {
                data: action.payload.dataRequests,
                error: null
            };

        case RequestsActionTypes.RequestsError:
            return {
                data: null,
                error: action.payload.error
            };
  
      default:
        return state;
    }
  }