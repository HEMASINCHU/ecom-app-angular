import { Action } from '@ngrx/store';
import { Auth, loggedInState } from './auth.reducer';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: Auth) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: loggedInState) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor() {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Login | LoginSuccess | LoginFailure | Logout;
