import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComoFuncionaComponent } from './pages/como-funciona/como-funciona.component';
import { DescargarComponent } from './pages/descargar/descargar.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Lifeline | Primeros auxilios post-sismo sin internet'
  },
  {
    path: 'como-funciona',
    component: ComoFuncionaComponent,
    title: 'Cómo funciona Lifeline | IA local y envío de casos'
  },
  {
    path: 'descargar',
    component: DescargarComponent,
    title: 'Descargar Lifeline | Android'
  },
  {
    path: 'privacidad',
    component: PrivacidadComponent,
    title: 'Privacidad | Lifeline RescueBridge'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
