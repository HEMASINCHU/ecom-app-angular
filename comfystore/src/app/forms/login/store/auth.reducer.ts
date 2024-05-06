import { Action } from '@ngrx/store';
import * as AuthActions from './auth.action';

export interface Auth {
  identifier: string;
  password: string;
}

export interface User {
  id: number;
  userName: string;
  confirmed: boolean;
  provider: string;
  blocked: boolean;
  createdAt: number;
  updatedAt: number;
}
export interface loggedInState {
  user: User;
  jwt: string;
}

export interface AuthState {
  login: loggedInState | null;
}

export const initial_state: AuthState = { login: null };

export function AuthReducer(state = initial_state, action: Action) {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        login: (action as AuthActions.LoginSuccess).payload,
      };
    default:
      return state;
  }
}
