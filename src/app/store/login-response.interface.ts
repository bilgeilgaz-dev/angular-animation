export interface LoginState {
    data: LoginResponse | null;
    error: string | null;
  }
  
export const inititalLoginState: LoginState = {
    data: null,
    error: null
} 
  
export interface LoginResponse {
    access_token: string;
    expires_in: string;
    token_type: string;
}

export interface LoginErrorResponse {
    error: string;
    error_description: string;
}