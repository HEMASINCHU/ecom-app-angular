import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // isLoggedIn = false;

  // login(username: string, password: string): boolean {
  //   if (username === 'admin' && password === 'password') {
  //     this.isLoggedIn = true;
  //     return true;
  //   }
  //   return false;
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }
  private apiUrl = 'https://strapi-store-server.onrender.com/api/auth/local';
  subscribe: any;
  constructor(private http: HttpClient) {}

  register(user: {
    userName: string;
    password: string;
    email: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: {
    identifier: string;
    password: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
}
