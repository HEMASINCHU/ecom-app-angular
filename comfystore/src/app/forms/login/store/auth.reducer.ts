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

// {
//   "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE0ODkxMTY3LCJleHAiOjE3MTc0ODMxNjd9.ez8A6UFHXB677Yf2hzjSllu1aF444uFKGNWVQXNAub0",
//   "user": {
//       "id": 4,
//       "username": "demo user",
//       "email": "test@test.com",
//       "provider": "local",
//       "confirmed": true,
//       "blocked": false,
//       "createdAt": "2023-08-07T20:52:10.289Z",
//       "updatedAt": "2023-08-10T00:46:16.069Z"
//   }
// }User
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
