import { Action, createReducer, on } from '@ngrx/store';
import { GetProducts } from './product.action';
import * as productListActions from './product.action';

export interface Product {
  name: string;
  id: number;
}

export interface ProductState {
  products: Array<Product>;
  product: Product | null;
}

export const initial_state: ProductState = { products: [], product: null };

export function productReducer(state = initial_state, action: Action) {
  switch (action.type) {
    case productListActions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: (action as productListActions.GetProductsSuccess).payload,
      };
    case productListActions.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: (action as productListActions.GetProductDetailsSuccess)
          .payload,
      };
    default:
      return state;
  }
}
