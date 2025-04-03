import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //private apiUrl = 'http://localhost:5050/api/libros';
  //constructor(private http: HttpClient) { }
  private libros: Book[] = [
    {
      "_id": "1",
      "titulo": "Caperucita Roja",
      "texto": "",
      "portada": "https://winbook.com.mx/wp-content/uploads/2020/06/117-0.jpg",
      "sinopsis": "Caperucita Roja debe llevar comida a su abuela, pero un lobo astuto la engaña.",
      "autor": "Charles Perrault",
      "descripcion_autor": "Charles Perrault fue un escritor francés del siglo XVII, conocido por sus cuentos de hadas.",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Portrait_de_Charles_Perrault_par_Charles_Le_Brun_%28d%C3%A9tail%29.jpg",
      "dificultad": "1"
    },
    {
      "_id": "2",
      "titulo": "Los Tres Cerditos",
      "texto": "",
      "portada": "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-tres-cerditos_23-2149856074.jpg",
      "sinopsis": "Tres cerditos construyen sus casas, pero un lobo intenta destruirlas.",
      "autor": "Joseph Jacobs",
      "descripcion_autor": "Cuento clásico de la tradición oral europea.",
      "foto_autor": "https://www.tebeosfera.com/T3content/img/T3_autores/_/1/jacobs_joseph_1.jpg",
      "dificultad": "4"
    },
    {
      "_id": "3",
      "titulo": "El Patito Feo",
      "texto": "",
      "portada": "https://image.isu.pub/220505082358-626a70f0bc440baf4a4cd6ce5f08824d/jpg/page_1_thumb_large.jpg",
      "sinopsis": "Un patito es rechazado por ser diferente, pero al final descubre su verdadera identidad.",
      "autor": "Hans Christian Andersen",
      "descripcion_autor": "Hans Christian Andersen fue un escritor danés conocido por sus cuentos infantiles.",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/1200px-HCA_by_Thora_Hallager_1869.jpg",
      "dificultad": "3"
    },
    {
      "_id": "4",
      "titulo": "Blancanieves y los Siete Enanitos",
      "texto": "",
      "portada": "https://i.pinimg.com/474x/b0/85/d0/b085d0e7886f8b724ec7cc599b83f27e.jpg",
      "sinopsis": "Blancanieves huye de la reina malvada y encuentra refugio con siete enanitos.",
      "autor": "Hermanos Grimm",
      "descripcion_autor": "Los Hermanos Grimm fueron escritores alemanes que recopilaron cuentos populares.",
      "foto_autor": "https://media.gettyimages.com/id/1149530443/es/vector/hermanos-grimm.jpg?s=612x612&w=gi&k=20&c=JMrE_WXtR4LbQIstW8h6J448frTVUFR0plT61yzPQxg=",
      "dificultad": "3"
    },
    {
      "_id": "5",
      "titulo": "Hansel y Gretel",
      "texto": "",
      "portada": "https://i.pinimg.com/736x/c5/2e/fe/c52efee03fe5841f5f98ea1eb741562b.jpg",
      "sinopsis": "Dos niños encuentran una casa de dulces habitada por una bruja malvada.",
      "autor": "Hermanos Grimm",
      "descripcion_autor": "Los Hermanos Grimm fueron escritores alemanes que recopilaron cuentos populares.",
      "foto_autor": "https://media.gettyimages.com/id/1149530443/es/vector/hermanos-grimm.jpg?s=612x612&w=gi&k=20&c=JMrE_WXtR4LbQIstW8h6J448frTVUFR0plT61yzPQxg=",
      "dificultad": "5"
    }
  ]

  constructor(private http: HttpClient) { }

  getBookById(id: string): Observable<Book | undefined> {
    const libro = this.libros.find((b) => b._id === id);
    if (libro) {

      return this.loadBookText(libro._id).pipe(
        map((texto: string) => {
          libro.texto = texto;
          return libro;
        })
      );
    }
    return of(undefined);
  }

  // Método para cargar el archivo de texto desde la carpeta assets
  private loadBookText(id: string): Observable<string> {
    const filePath = `books/${id}.txt`;
    return this.http.get(filePath, { responseType: 'text' });
  }

  getBooks(): Observable<Book[]> {
    return of(this.libros);
  }
}
