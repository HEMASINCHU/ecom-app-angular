import { createAction } from '@ngrx/store';

export const getProducts = createAction('[ProductListComponent] ProductList');
export const setProduct = createAction(
  '[ProductDetailComponent] ProductDetail'
);
