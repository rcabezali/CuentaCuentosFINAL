import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../servicios/book-service.service';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-lectura-escritura',
  imports: [CommonModule],
  templateUrl: './lectura-escritura.component.html',
  styleUrl: './lectura-escritura.component.css',
})
export class LecturaEscrituraComponent implements OnInit {

    bookId: string = '';  // Para almacenar el ID del libro
    textoLibro: string = '';  // Para almacenar el texto del libro
    lineas: string[] = [];  // Para almacenar las líneas del texto
    indice: number = 0;  // Para controlar el índice de la línea actual
  
    constructor(
      private route: ActivatedRoute,
      private bookService: BookService // Inyectamos el servicio
    ) { }
  
    ngOnInit(): void {
      // Obtener el ID del libro desde la ruta
      this.bookId = this.route.snapshot.paramMap.get('id')!;
  
      // Llamamos al servicio para obtener el libro por ID
      this.obtenerLibro();
    }
  
    obtenerLibro() {
      // Llamamos al servicio para obtener el libro por su ID
      this.bookService.getBookById(this.bookId).subscribe((libro) => {
        if (libro) {
          // Asignamos el texto del libro a la variable
          this.textoLibro = libro.texto;
          if (this.textoLibro) {
            // Convertimos el texto en líneas
            this.lineas = this.textoLibro.split('\n');
          } else {
            console.error("El texto no está disponible.");
          }
        }
      });
    }
  
    siguiente() {
      if (this.indice < this.lineas.length - 1) {
        this.indice++;
      }
    }
  
    anterior() {
      if (this.indice > 0) {
        this.indice--;
      }
    }

}
