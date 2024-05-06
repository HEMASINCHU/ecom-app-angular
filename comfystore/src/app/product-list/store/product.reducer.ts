import { Action, createReducer, on } from '@ngrx/store';
import { GetProducts } from './product.action';
import * as productListActions from './product.action';

export interface Attributes {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  price: number;
  category: string;
  createdAt: bigint;
  updatedAt: bigint;
}
export interface Product {
  attributes: Attributes;
  id: number;
}
export interface ProductState {
  products: Product[];
  product: Product | null;
}

export const initial_state: ProductState = { products: [], product: null };

export function productReducer(state = initial_state, action: Action) {
  switch (action.type) {
    case productListActions.GET_PRODUCTS_SUCCESS:
      const { data } = (action as productListActions.GetProductsSuccess)
        .payload;
      return {
        ...state,
        products: data,
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
