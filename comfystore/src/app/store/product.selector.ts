import { createSelector } from '@ngrx/store';
import { AppState, ProductState } from './product.reducer';

const selectProductDetail = (state: AppState) => state.productDetail;

export const selectProducts = createSelector(
  selectProductDetail,
  (state: ProductState) => state.products
);
