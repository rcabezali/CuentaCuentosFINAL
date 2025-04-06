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
      "portada": "https://media.istockphoto.com/id/491377392/es/vector/caperucita-roja-de-reuniones-con-un-lobo.jpg?s=612x612&w=0&k=20&c=5CWNosDi5wr0By7ZQDJwFwSo_j0ln0aGiVWpX_pGSmU=",
      "sinopsis": "En un mundo donde el misterio del bosque se confunde con la inocencia de la niñez, Caperucita Roja se aventura por un sendero lleno de luces y sombras, donde cada paso es una mezcla de asombro y peligro. Con su capa carmesí ondeando al viento, se dirige a la casa de su abuela, ignorando que cada árbol y cada susurro esconden un secreto. El astuto lobo, con su mirada penetrante y plan maquiavélico, aguarda para desafiar la inocencia de la niña, dando inicio a una aventura cargada de emociones intensas y giros inesperados que transformarán su destino para siempre.",
      "autor": "Charles Perrault",
      "descripcion_autor": "Charles Perrault era un mago de las palabras de Francia. Le encantaba inventar cuentos llenos de aventuras y magia, y hacía reír e imaginar a niños y adultos. ¡Su imaginación era tan brillante como una capa roja!",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Portrait_de_Charles_Perrault_par_Charles_Le_Brun_%28d%C3%A9tail%29.jpg",
      "dificultad": "1"
    },
    {
      "_id": "2",
      "titulo": "Los Tres Cerditos",
      "texto": "",
      "portada": "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-tres-cerditos_23-2149856074.jpg",
      "sinopsis": "Tres hermanos cerditos, cada uno con su propia personalidad y sueños, deciden construir su hogar en un mundo donde la seguridad y el ingenio se ponen a prueba. Uno erige una humilde casa de paja, otro un refugio de madera, y el tercero apuesta por la solidez del ladrillo. Pero cuando un lobo feroz, impulsado por instintos primarios y una astucia inigualable, aparece para amenazar sus creaciones, se desata una batalla épica. La historia se convierte en una lección de resiliencia, creatividad y la importancia de la unión familiar frente a la adversidad.",
      "autor": "Joseph Jacobs",
      "descripcion_autor": "Joseph Jacobs era un cuentacuentos muy simpático que reunía historias tradicionales y las contaba de manera divertida. ¡Sus palabras hacían que cada cuento fuera como un juego mágico lleno de aventuras!",
      "foto_autor": "https://www.tebeosfera.com/T3content/img/T3_autores/_/1/jacobs_joseph_1.jpg",
      "dificultad": "4"
    },
    {
      "_id": "3",
      "titulo": "El Patito Feo",
      "texto": "",
      "portada": "https://image.isu.pub/220505082358-626a70f0bc440baf4a4cd6ce5f08824d/jpg/page_1_thumb_large.jpg",
      "sinopsis": "Esta conmovedora narración sigue la travesía de un patito marginado por su apariencia diferente, que se embarca en un viaje de autodescubrimiento y transformación. A lo largo de su recorrido, enfrenta la soledad, la burla y los desafíos del mundo, pero también descubre en cada obstáculo una oportunidad para revelar la fortaleza y la belleza que reside en su interior. Su evolución, llena de momentos dolorosos y destellos de esperanza, es un canto a la aceptación y a la magia de encontrarse a uno mismo.",
      "autor": "Hans Christian Andersen",
      "descripcion_autor": "Hans Christian Andersen era un soñador danés con un corazón lleno de imaginación. Le encantaba ver el mundo con ojos mágicos y escribir cuentos que enseñaban a creer en lo especial que es cada uno.",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/1200px-HCA_by_Thora_Hallager_1869.jpg",
      "dificultad": "3"
    },
    {
      "_id": "4",
      "titulo": "Blancanieves y los Siete Enanitos",
      "texto": "",
      "portada": "https://i.pinimg.com/474x/b0/85/d0/b085d0e7886f8b724ec7cc599b83f27e.jpg",
      "sinopsis": "En un reino de contrastes donde la envidia y la bondad coexisten, Blancanieves, una joven de inigualable dulzura, huye de la tiranía de una reina malvada. Durante su escape, encuentra refugio en una acogedora cabaña oculta en el bosque, habitada por siete enanitos de corazón noble. Juntos, enfrentan desafíos y descubren que la amistad y la solidaridad pueden iluminar incluso los rincones más oscuros, desatando una cadena de aventuras mágicas que restauran la esperanza y el amor en su mundo.",
      "autor": "Hermanos Grimm",
      "descripcion_autor": "Los Hermanos Grimm eran dos hermanos muy creativos y aventureros que amaban contar historias llenas de magia y misterio. ¡Siempre estaban en busca de cuentos sorprendentes para compartir con todos!",
      "foto_autor": "https://media.gettyimages.com/id/1149530443/es/vector/hermanos-grimm.jpg?s=612x612&w=gi&k=20&c=JMrE_WXtR4LbQIstW8h6J448frTVUFR0plT61yzPQxg=",
      "dificultad": "3"
    },
    {
      "_id": "5",
      "titulo": "Hansel y Gretel",
      "texto": "",
      "portada": "https://i.pinimg.com/736x/c5/2e/fe/c52efee03fe5841f5f98ea1eb741562b.jpg",
      "sinopsis": "Perdidos en el laberinto de un bosque encantado, Hansel y Gretel se ven inmersos en una odisea llena de peligros y maravillas. La incertidumbre de su destino se ve desvanecida al descubrir una casa construida enteramente de dulces y manjares, un refugio que promete seguridad en apariencia, pero oculta oscuros designios. La astuta bruja que habita la morada pone a prueba la valentía y la astucia de los hermanos, obligándolos a enfrentar desafíos que revelan secretos ocultos y la fuerza del lazo familiar.",
      "autor": "Hermanos Grimm",
      "descripcion_autor": "Los Hermanos Grimm eran dos hermanos muy creativos y aventureros que amaban contar historias llenas de magia y misterio. ¡Se divertían mucho reuniendo cuentos y compartiéndolos para que todos pudieran soñar con aventuras!",
      "foto_autor": "https://media.gettyimages.com/id/1149530443/es/vector/hermanos-grimm.jpg?s=612x612&w=gi&k=20&c=JMrE_WXtR4LbQIstW8h6J448frTVUFR0plT61yzPQxg=",
      "dificultad": "5"
    },
    {
      "_id": "6",
      "titulo": "La Cenicienta",
      "texto": "",
      "portada": "https://images.cdn3.buscalibre.com/fit-in/360x360/da/91/da91a78dbc0805a4899ea24b0a604f0e.jpg",
      "sinopsis": "En un universo donde la magia se funde con la cruda realidad, Cenicienta, oprimida por la injusticia y el desprecio, descubre en lo más profundo de su ser la fuerza para transformar su destino. Gracias a la intervención de un hada madrina, su existencia se convierte en una noche de ensueño, llena de hechizos, valses encantados y un zapato perdido que simboliza el renacer de un amor verdadero. La historia resalta que la verdadera grandeza reside en la nobleza del corazón y la perseverancia de los sueños.",
      "autor": "Charles Perrault",
      "descripcion_autor": "Charles Perrault era un mago de las palabras de Francia. Le encantaba inventar cuentos llenos de aventuras y magia, y hacía reír e imaginar a niños y adultos. ¡Su imaginación era tan brillante como una capa roja!",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Portrait_de_Charles_Perrault_par_Charles_Le_Brun_%28d%C3%A9tail%29.jpg",
      "dificultad": "2"
    },
    {
      "_id": "7",
      "titulo": "La Bella Durmiente",
      "texto": "",
      "portada": "https://d34gk8hlg92cbs.cloudfront.net/916/2.jpeg",
      "sinopsis": "Sumida en un sueño profundo y encantado, La Bella Durmiente aguarda en silencio el beso que rompa un hechizo ancestral. En un castillo olvidado, rodeada de jardines encantados y susurros de viejas leyendas, la princesa se convierte en el símbolo vivo de la belleza oculta y la esperanza. Con cada minuto que transcurre, la magia del reino se intensifica, presagiando la llegada de un amor verdadero que restaurará la luz y la vida en un mundo sumido en la penumbra.",
      "autor": "Charles Perrault",
      "descripcion_autor": "Charles Perrault era un mago de las palabras de Francia, muy divertido y soñador. Le encantaba crear mundos mágicos y llenos de aventuras para que niños y niñas pudieran volar con su imaginación.",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Portrait_de_Charles_Perrault_par_Charles_Le_Brun_%28d%C3%A9tail%29.jpg",
      "dificultad": "3"
    },
    {
      "_id": "8",
      "titulo": "Ricitos de Oro y los Tres Osos",
      "texto": "",
      "portada": "https://images.cdn3.buscalibre.com/fit-in/360x360/91/58/91586be215d570042c0c9bfe434d79e7.jpg",
      "sinopsis": "Ricitos de Oro, con su melena resplandeciente y espíritu intrépido, se adentra en un bosque repleto de maravillas y secretos ancestrales. Durante su caminata, descubre una pequeña cabaña que pertenece a una familia de osos, donde cada habitación y objeto emana una sutil magia y un legado lleno de misterios. La visita se transforma en una lección sobre el respeto y la intriga, revelando un mundo en el que la naturaleza y los hechizos olvidados se entrelazan en una danza de asombro y enseñanza.",
      "autor": "Robert Southey",
      "descripcion_autor": "Robert Southey era un poeta y cuentacuentos inglés muy simpático. Le encantaba jugar con las palabras y crear historias divertidas que hacían brillar la imaginación, ¡como un rayo de sol en el bosque!",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/6/62/Robert_Southey_-_Project_Gutenberg_eText_13619.jpg",
      "dificultad": "2"
    },
    {
      "_id": "9",
      "titulo": "La Sirenita",
      "texto": "",
      "portada": "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/f6ef5919-43d9-46fe-8582-6543a7473036/d_1200_1200/portada_la-sirenita-cuento-con-mecanismos_aa-vv_202202070817.webp",
      "sinopsis": "En las profundidades de un océano encantado, donde los corales iluminan paisajes submarinos y criaturas míticas danzan al compás de las olas, una joven sirena sueña con conocer el misterioso mundo de los humanos. Su voz melodiosa, cargada de anhelos y secretos, se convierte en el eco de un deseo prohibido. Emprende una aventura que la sumerge en un universo de peligros y maravillas, donde el amor y el destino se entrelazan en una sinfonía de emociones intensas y desafíos inigualables.",
      "autor": "Hans Christian Andersen",
      "descripcion_autor": "Hans Christian Andersen era un soñador danés con una imaginación grandiosa. Le encantaba escribir cuentos que hacían viajar a niños y niñas a mundos llenos de magia y aventuras, ¡como un paseo en barco por un mar encantado!",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/1200px-HCA_by_Thora_Hallager_1869.jpg",
      "dificultad": "4"
    },
    {
      "_id": "10",
      "titulo": "El Soldadito de Plomo",
      "texto": "",
      "portada": "https://m.media-amazon.com/images/I/71c92zyKi6L._SL1181_.jpg",
      "sinopsis": "En un reino donde la magia se oculta en cada rincón y los sueños se materializan en formas insospechadas, un pequeño soldadito de plomo cobra vida para emprender una epopeya extraordinaria. A pesar de su frágil apariencia, su espíritu inquebrantable y su corazón valiente lo impulsan a enfrentar desafíos colosales. En cada paso, se encuentra con pruebas mágicas y personajes encantadores, demostrando que la verdadera fortaleza reside en el coraje interior y en la pasión por forjar un destino lleno de honor y esperanza.",
      "autor": "Hans Christian Andersen",
      "descripcion_autor": "Hans Christian Andersen era un soñador danés con una imaginación increíble. Creaba cuentos que nos enseñaban que la valentía y un gran corazón pueden hacer milagros, ¡como un pequeño soldado de plomo que cobra vida!",
      "foto_autor": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/1200px-HCA_by_Thora_Hallager_1869.jpg",
      "dificultad": "3"
    },
    {
      "_id": "11",
      "titulo": "El Príncipe Rana",
      "texto": "",
      "portada": "https://m.media-amazon.com/images/I/81N0AZlPwTL._SL1500_.jpg",
      "sinopsis": "En lo profundo de un reino encantado, donde la magia y la realidad se entrelazan en un baile eterno, una humilde rana esconde un secreto ancestral que desafía las leyes de la naturaleza. Atrapada en un hechizo milenario, su destino se transforma tras un acto de fe y amor genuino, desatando una metamorfosis sorprendente. La aventura que sigue revela un universo lleno de maravillas, lecciones y desafíos, invitando a creer en lo imposible y a descubrir que la verdadera magia reside en la capacidad de cambiar y en la esperanza de un futuro prometedor.",
      "autor": "Hermanos Grimm",
      "descripcion_autor": "Los Hermanos Grimm eran dos hermanos muy creativos y aventureros que se divertían inventando cuentos llenos de magia y misterio. ¡Sus historias hacen que cada día sea una aventura mágica!",
      "foto_autor": "https://media.gettyimages.com/id/1149530443/es/vector/hermanos-grimm.jpg?s=612x612&w=gi&k=20&c=JMrE_WXtR4LbQIstW8h6J448frTVUFR0plT61yzPQxg=",
      "dificultad": "4"
    }
  ];
  
  

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
