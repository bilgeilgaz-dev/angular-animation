import { Action } from '@ngrx/store';
import { LoginResponse } from '../store/login-response.interface';

export enum LoginActionTypes {
    Login = 'Login',
    LoginError = 'Login Error'
}

export class LoginAction implements Action {
    type: string;
    payload: {
      response: LoginResponse,
      error: string
    };
  }
  
  export class UserLogin implements Action {
    readonly type = LoginActionTypes.Login;
  
    constructor(readonly payload: {response: LoginResponse}) {
  
    }
  }
  
  export class LoginError implements Action {
    readonly type = LoginActionTypes.LoginError;
  
    constructor(readonly payload: {error: string}) {
  
    }
  }