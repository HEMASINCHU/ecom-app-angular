import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../product.service';
import * as productListActions from './product.action';
import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { Product } from './product.reducer';
@Injectable()
export class ProductListEffects {
  productId!: number;
  //   getProducts$ = createEffect(() => this.actions$.pipe(
  //     ofType(productListActions.GET_PRODUCTS),
  //     exhaustMap(() => this.productService.getProducts().pipe(
  //         map(products => productListActions.GetProducts(products)),
  //         catchError
  //     ))
  //   ));
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productListActions.GET_PRODUCTS),
      exhaustMap(() =>
        this.productService
          .getProducts()
          .pipe(
            map(
              (products) => new productListActions.GetProductsSuccess(products)
            )
          )
      )
    )
  );
  setProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productListActions.GET_PRODUCT_DETAILS),
      switchMap((action: productListActions.GetProductDetails) =>
        this.productService.getProductById(+action.payload).pipe(
          tap((res) => console.log(res)),
          map((res) => new productListActions.GetProductDetailsSuccess(res))
        )
      )
    )
  );
}
