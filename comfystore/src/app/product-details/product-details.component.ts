import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (this.route) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.productId = +id;
        this.product$ = this.productService.getProductById(this.productId);
      } else {
        console.error('Product ID is missing.');
      }
    } else {
      console.error('ActivatedRoute is not available.');
    }
  }
}
