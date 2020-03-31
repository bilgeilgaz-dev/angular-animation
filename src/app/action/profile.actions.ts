import { Action } from '@ngrx/store';
import { Profile } from '../store/profile.interface';

export type ProfileUnion = LoadProfile | ProfileError;

export enum ProfileActionTypes {
    LoadProfile = 'Load Profile',
    ProfileError = 'Profile Error'
}

export class ProfileAction implements Action {
    type: string;
    payload: {
      profile: Profile,
      error: string
    };
  }
  
  export class LoadProfile implements Action {
    readonly type = ProfileActionTypes.LoadProfile;
  
    constructor(readonly payload: {profile: Profile}) {
  
    }
  }
  
  export class ProfileError implements Action {
    readonly type = ProfileActionTypes.ProfileError;
  
    constructor(readonly payload: {error: string}) {
  
    }
  }