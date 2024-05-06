import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product-list/store/product.reducer';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://strapi-store-server.onrender.com/api/products';
  subscribe: any;

  constructor(private http: HttpClient) {}

  getProducts(searchTerm?: string): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(this.apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
