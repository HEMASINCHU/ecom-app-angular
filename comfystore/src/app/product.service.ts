import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  subscribe: any;

  constructor(private http: HttpClient) {}

  getProducts(searchTerm?: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((products: any[]) => {
        if (searchTerm) {
          return products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return products;
      })
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
