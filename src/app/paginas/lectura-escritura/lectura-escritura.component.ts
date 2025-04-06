import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../servicios/book-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lectura-escritura',
  imports: [CommonModule, RouterLink],
  templateUrl: './lectura-escritura.component.html',
  styleUrls: ['./lectura-escritura.component.css'],
})
export class LecturaEscrituraComponent implements OnInit, OnDestroy {

  bookId: string = '';
  tituloCuento: string = '';
  textoLibro: string = '';
  lineas: string[] = [];
  indice: number = 0;
  modoHablado: boolean = false;

  public isPaused: boolean = false;

  private speechSynthesis = window.speechSynthesis;
  private utterance = new SpeechSynthesisUtterance();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id')!;
    this.route.queryParams.subscribe(params => {
      this.modoHablado = params['action'] === 'escuchar';
    });
    this.obtenerLibro();
  }

  obtenerLibro() {
    this.bookService.getBookById(this.bookId).subscribe((libro) => {
      if (libro) {
        this.tituloCuento = libro.titulo || 'Sin Título';
        this.textoLibro = libro.texto;
        if (this.textoLibro) {
          this.lineas = this.textoLibro.split('\n').filter(line => line.trim() !== '');
          this.indice = 0;

          this.utterance.lang = 'es-ES';
          this.utterance.onend = () => this.handleSpeechEnd();

          if (this.modoHablado) {
            this.leerEnVozAlta();
          }
        }
      }
    });
  }

  leerEnVozAlta() {
    if (!this.lineas.length || this.indice >= this.lineas.length) return;

    this.utterance.text = this.lineas[this.indice];
    this.speechSynthesis.cancel();
    this.speechSynthesis.speak(this.utterance);
  }

  handleSpeechEnd() {
    if (this.indice < this.lineas.length - 1) {
      this.indice++;
      this.cdr.detectChanges();
      this.leerEnVozAlta();
    }
  }

  pausarLectura() {
    if (this.speechSynthesis.speaking && !this.isPaused) {
      this.speechSynthesis.pause();
      this.isPaused = true;
    } else if (this.isPaused) {
      this.speechSynthesis.resume();
      this.isPaused = false;
    }
  }

  detenerLectura() {
    this.speechSynthesis.cancel();
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

  toggleMode() {
    this.modoHablado = !this.modoHablado;
    if (this.modoHablado) {
      this.leerEnVozAlta();
    } else {
      this.detenerLectura();
    }
  }

  ngOnDestroy(): void {
    this.speechSynthesis.cancel();
  }
}
