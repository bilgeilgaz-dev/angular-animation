import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { profileReducer } from './profile.reducers';
import { relationsReducer } from './relations.reducers';
import { AppState } from '../store/application-state.interface';
import { environment } from 'src/environments/environment';
import { loginReducer } from './login.reducers';
import { requestsReducer } from './requests.reducer';

export const reducers: ActionReducerMap<AppState> = {
    login: loginReducer,
    profile: profileReducer,
    relations: relationsReducer,
    requests: requestsReducer
  };

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

  