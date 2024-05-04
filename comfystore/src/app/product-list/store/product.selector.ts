import { createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';
import { AppState } from '../../store/app.reducer';

const selectProductDetail = (state: AppState) => state.productDetail;

export const selectProducts = createSelector(
  selectProductDetail,
  (state: ProductState) => state.products
);

export const selectProductDetails = createSelector(
  selectProductDetail,
  (state: ProductState) => state.product
);
