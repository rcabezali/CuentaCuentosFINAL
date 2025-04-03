import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
      "texto": "Había una vez una dulce niña que vivía con su madre en una pequeña casa cerca del bosque. Un día, su madre le pidió que llevara una cesta con comida a su abuelita, que vivía al otro lado del bosque...\nCaperucita caminó alegremente por el sendero, pero el lobo astuto la vio y planeó un engaño...\nCuando llegó a la cabaña, encontró a su abuela acostada en la cama con una apariencia extraña...\n—¡Abuela, qué ojos tan grandes tienes! —dijo Caperucita...\n—¡Son para verte mejor, querida! —contestó el lobo disfrazado...\nFinalmente, un valiente leñador escuchó los gritos de la niña y entró a salvarlas. Abrió la panza del lobo y la abuela salió sana y salva...\nDesde entonces, Caperucita aprendió a no hablar con extraños y a tener cuidado en el bosque.",
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
      "texto": "Había tres cerditos que decidieron construir sus casas para protegerse del lobo. El primero hizo su casa de paja, el segundo de madera y el tercero de ladrillos...\nEl lobo llegó y sopló con todas sus fuerzas la casa de paja y luego la de madera...\nPero la casa de ladrillos era fuerte y no pudo derribarla. Los tres cerditos aprendieron la importancia del esfuerzo y el trabajo bien hecho.",
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
      "texto": "En una granja, nacieron unos patitos muy bonitos, pero uno de ellos era diferente y todos lo rechazaban...\nEl patito decidió marcharse y pasó un duro invierno solo...\nUn día, se miró en el agua y descubrió que se había convertido en un hermoso cisne...\nAprendió que la belleza está en aceptarse tal como uno es.",
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
      "texto": "Una reina malvada quería ser la más hermosa del reino, pero su espejo le dijo que Blancanieves era más bella...\nCelosa, la reina ordenó matar a Blancanieves, pero esta escapó y vivió con los siete enanitos en el bosque...\nLa reina disfrazada le dio una manzana envenenada y Blancanieves cayó en un sueño profundo...\nFinalmente, un príncipe la despertó con un beso y vivieron felices para siempre.",
      "portada": "https://i.pinimg.com/474x/b0/85/d0/b085d0e7886f8b724ec7cc599b83f27e.jpg",
      "sinopsis": "Blancanieves huye de la reina malvada y encuentra refugio con siete enanitos.",
      "autor": "Hermanos Grimm",
      "descripcion_autor": "Los Hermanos Grimm fueron escritores alemanes que recopilaron cuentos populares.",
      "foto_autor": "https://media.gettyimages.com/id/1149530443/es/vector/hermanos-grimm.jpg?s=612x612&w=gi&k=20&c=JMrE_WXtR4LbQIstW8h6J448frTVUFR0plT61yzPQxg=",
      "dificultad": "medio"
    },
    {
      "_id": "5",
      "titulo": "Hansel y Gretel",
      "texto": "Hansel y Gretel fueron abandonados en el bosque por sus padres...\nSiguiendo un camino de migas de pan, llegaron a una casa hecha de dulces...\nUna malvada bruja los capturó y quiso comérselos...\nPero los niños lograron escapar empujándola al horno y regresaron felices con su padre.",
      "portada": "https://i.pinimg.com/736x/c5/2e/fe/c52efee03fe5841f5f98ea1eb741562b.jpg",
      "sinopsis": "Dos niños encuentran una casa de dulces habitada por una bruja malvada.",
      "autor": "Hermanos Grimm",
      "descripcion_autor": "Los Hermanos Grimm fueron escritores alemanes que recopilaron cuentos populares.",
      "foto_autor": "https://media.gettyimages.com/id/1149530443/es/vector/hermanos-grimm.jpg?s=612x612&w=gi&k=20&c=JMrE_WXtR4LbQIstW8h6J448frTVUFR0plT61yzPQxg=",
      "dificultad": "difícil"
    }
  ]

  getBookById(id: string): Observable<Book | undefined> {
    //return this.http.get<Book>(`${this.apiUrl}/${id}`);
    const libro = this.libros.find((b) => b._id === id);
    return of(libro);
  }
  getBooks(): Observable<Book[]> {
    //return this.http.get<any[]>(this.apiUrl);
    return of(this.libros);
  }
}
