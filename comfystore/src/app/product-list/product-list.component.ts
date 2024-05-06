import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProducts } from './store/product.selector';
import * as productListActions from './store/product.action';
import { AppState } from '../store/app.reducer';
import { Product } from './store/product.reducer';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  searchTerm!: string;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.products$ = this.store.select(selectProducts);
  }

  loadProducts(): void {
    // this.products$ = this.productService.getProducts();
    this.store.dispatch(new productListActions.GetProducts());
  }
}
