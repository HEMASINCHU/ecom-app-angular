import { ActionReducerMap } from '@ngrx/store';
import * as fromProductList from '../product-list/store/product.reducer';

export interface AppState {
  productDetail: fromProductList.ProductState;
}

export const appReducer: ActionReducerMap<AppState> = {
  productDetail: fromProductList.productReducer,
};
