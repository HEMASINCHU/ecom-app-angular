import { Action } from '@ngrx/store';
import { Product } from './product.reducer';

// export const getProducts = createAction(
//   '[ProductListComponent] ProductList',
//   props<{ products: Product[] }>
// );

// props<{}>
export const GET_PRODUCTS = '[Product List] Get Products';
export const GET_PRODUCTS_SUCCESS = '[Product List] Get Products Success';
export const GET_PRODUCT_DETAILS = '[Product List] Get Product Details';
export const GET_PRODUCT_DETAILS_SUCCESS =
  '[Product List] Get Product Details Success ';
export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetProductDetails implements Action {
  readonly type = GET_PRODUCT_DETAILS;
  constructor(public payload: string) {}
}
export class GetProductDetailsSuccess implements Action {
  readonly type = GET_PRODUCT_DETAILS_SUCCESS;
  constructor(public payload: Product) {}
}

export type ProductListActions =
  | GetProducts
  | GetProductsSuccess
  | GetProductDetails
  | GetProductDetailsSuccess;
