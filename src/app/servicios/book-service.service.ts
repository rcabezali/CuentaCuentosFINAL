import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book.model';
import { ApiResponse } from '../models/api-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http
      .get<ApiResponse<Book[]>>(this.apiUrl)
      .pipe(map(resp => resp.data));
  }

  getBookById(id: string): Observable<Book> {
    return this.http
      .get<ApiResponse<Book>>(`${this.apiUrl}/${id}`)
      .pipe(map(resp => resp.data));
  }
}
