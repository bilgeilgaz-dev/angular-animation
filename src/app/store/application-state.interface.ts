import { UiState } from './ui-state.interface';
import { StoreData } from './store-data.interface';
import { ProfileState } from './profile.interface';
import { RelationsState } from './relations.interface';
import { LoginState } from './login-response.interface';
import { RequestsState } from './requests.interface';

export interface AppState {
    login: LoginState;
    profile: ProfileState;
    relations: RelationsState;
    requests: RequestsState;
}

export interface ApplicationState {
    uiState: UiState,
    storeData: StoreData
}