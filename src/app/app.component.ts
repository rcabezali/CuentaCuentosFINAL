import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuentoComponent } from "./componentes/cuento/cuento.component";
import { ListaCuentosComponent } from "./componentes/lista-cuentos/lista-cuentos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CuentoComponent, ListaCuentosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuentaCuentos';
}
