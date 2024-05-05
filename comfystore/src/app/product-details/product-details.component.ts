import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as productListActions from '../product-list/store/product.action';
import { selectProductDetails } from '../product-list/store/product.selector';
import { Product } from '../product-list/store/product.reducer';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product$!: Observable<any>;
  product!: Product | null;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    if (this.route) {
      const id: string | null = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.store.dispatch(new productListActions.GetProductDetails(id));
      }
      this.product$ = this.store.select(selectProductDetails);
    }
  }
}
