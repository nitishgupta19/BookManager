import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../constants/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  login(user: IUser): Observable<any> {
    return this.http.post(`auth/login`, user);
  }
  logout(userId: number): Observable<any> {
    return this.http.post(`auth/logout`, { id: userId });
  }
  signup(user: IUser): Observable<any> {
    return this.http.post(`auth/signup`, user);
  }

  createBook(data: any): Observable<any> {
    return this.http.post('book/create', data);
  }

  getBookList(data: any): Observable<any> {
    return this.http.post('book/list', data);
  }

  getBookDeatils(id: any): Observable<any> {
    return this.http.get(`book/${id}`);
  }

  updateBook(data: any): Observable<any> {
    return this.http.post('book/update', data);
  }
}
