import { ProfileState, initialProfileState } from '../store/profile.interface';
import { ProfileAction, ProfileActionTypes } from '../action/profile.actions';
import { AppState } from '../store/application-state.interface';

export const selectProfile = (state: AppState) => state.profile.data;
export const selectProfileError = (state: AppState) => state.profile.error;

export function profileReducer(state: ProfileState = initialProfileState, action: ProfileAction): ProfileState {
    switch (action.type) {
        case ProfileActionTypes.LoadProfile:
            return {
                data: action.payload.profile,
                error: null
            };

        case ProfileActionTypes.ProfileError:
            return {
                data: null,
                error: action.payload.error
            };
  
      default:
        return state;
    }
  }