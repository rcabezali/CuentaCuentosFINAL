import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  _id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  content: string[];
  audioUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBookById(bookId: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5000/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}
