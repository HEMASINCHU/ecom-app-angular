import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getProducts } from '../store/product.action';
import { AppState } from '../store/product.reducer';
import { selectProducts } from '../store/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<any[]>;
  searchTerm!: string;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.store.select(selectProducts).subscribe((res) => console.log(res));
  }

  loadProducts(): void {
    // this.products$ = this.productService.getProducts();
    this.store.dispatch(getProducts());
  }
}
