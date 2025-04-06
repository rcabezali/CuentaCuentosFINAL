import { Component } from '@angular/core';
import { ListaCuentosComponent } from '../../componentes/lista-cuentos/lista-cuentos.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ListaCuentosComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent { }
