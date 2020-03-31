
import { AppState } from '../store/application-state.interface';
import { LoginState, inititalLoginState } from '../store/login-response.interface';
import { LoginActionTypes, LoginAction } from '../action/login.actions';

export const selectLogin = (state: AppState) => state.login.data;
export const selectLoginError = (state: AppState) => state.login.error;

export function loginReducer(state: LoginState = inititalLoginState, action: LoginAction): LoginState {
    switch (action.type) {
        case LoginActionTypes.Login:
            return {
                data: action.payload.response,
                error: null
            };

        case LoginActionTypes.LoginError:
            return {
                data: null,
                error: action.payload.error
            };
  
      default:
        return state;
    }
  }