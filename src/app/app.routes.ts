import { Routes } from '@angular/router';
import { MenuComponent } from './paginas/menu/menu.component';
import { LecturaEscrituraComponent } from './paginas/lectura-escritura/lectura-escritura.component';
import { ListaCuentosComponent } from './componentes/lista-cuentos/lista-cuentos.component';
import { InfoCuentoComponent } from './paginas/info-cuento/info-cuento.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'lectura-escritura/:id', component: LecturaEscrituraComponent },
    { path: 'info-cuento/:id', component: InfoCuentoComponent },
    { path: '**', component: ListaCuentosComponent }
];



