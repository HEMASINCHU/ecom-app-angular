import { createReducer, on } from '@ngrx/store';
import { getProducts } from './product.action';

export interface Product {
  name: string;
  id: number;
}

export interface ProductState {
  products: Array<Product>;
  product: Product | null;
}

export interface AppState {
  productDetail: ProductState;
}

export const initial_state: ProductState = { products: [], product: null };

export const productReducer = createReducer(
  initial_state,
  on(getProducts, (state) => {
    console.log('in get products');
    return { ...state, products: [{ name: 'xyz', id: 0 }] };
  })
);
