import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../servicios/book-service.service';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-cuento',
  templateUrl: './info-cuento.component.html',
  styleUrls: ['./info-cuento.component.css'],
  imports: [CommonModule, RouterModule]
})
export class InfoCuentoComponent implements OnInit {
  book: Book | any = null;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');

    if (bookId) {

      this.bookService.getBookById(bookId).subscribe(
        (data: Book | undefined) => {
          this.book = data;
        },
        (error: any) => {
          console.error('Error al obtener el libro:', error);
        }
      );
    }
  }
}
