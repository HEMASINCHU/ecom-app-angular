import { ActionReducerMap } from '@ngrx/store';
import * as fromProductList from '../product-list/store/product.reducer';
import * as auth from '../forms/login/store/auth.reducer'
export interface AppState {
  productDetail: fromProductList.ProductState;
  authDetails:auth.AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  productDetail: fromProductList.productReducer,
  authDetails: auth.AuthReducer
};
