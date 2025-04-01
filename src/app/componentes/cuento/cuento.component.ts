import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cuento',
  standalone: true,
  templateUrl: './cuento.component.html',
  styleUrls: ['./cuento.component.css'],
  imports: [RouterModule, CommonModule]
})
export class CuentoComponent {
  @Input() book!: {
    _id: string;
    titulo: string;
    texto: string;
    portada: string;
    sinopsis: string;
    autor: string;
    descripcion_autor: string;
    foto_autor: string;
    dificultad: string;
  };
}
