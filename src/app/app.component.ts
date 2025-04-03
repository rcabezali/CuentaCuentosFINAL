import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuentoComponent } from "./componentes/cuento/cuento.component";
import { ListaCuentosComponent } from "./componentes/lista-cuentos/lista-cuentos.component";
import { DifficultyStarsPipe } from './difficulty-stars.pipe';
import { LeerComponent } from './componentes/leer/leer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CuentoComponent, ListaCuentosComponent, DifficultyStarsPipe, LeerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cuentaCuentos';
}
