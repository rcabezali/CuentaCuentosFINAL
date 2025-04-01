import { Component } from '@angular/core';
import { ListaCuentosComponent } from '../../componentes/lista-cuentos/lista-cuentos.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ListaCuentosComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent { }
