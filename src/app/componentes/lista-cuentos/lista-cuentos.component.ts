import { Component } from '@angular/core';
import { CuentoComponent } from '../cuento/cuento.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookService } from '../../servicios/book-service.service';

@Component({
  selector: 'app-lista-cuentos',
  standalone: true,
  templateUrl: './lista-cuentos.component.html',
  styleUrls: ['./lista-cuentos.component.css'],
  imports: [CuentoComponent, CommonModule, RouterLink]
})
export class ListaCuentosComponent {
  books: any[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe(
      (data: any) => {
        this.books = data;
        console.log(this.books);
      },
      (error: any) => {
        console.error('Error al obtener los libros', error);
      }
    );
  }
}

