import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidComponent } from './components/covid/covid.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { NoticiasComponent } from './components/noticias/noticias.component'; 

const routes: Routes = [ 
  { path: 'noticias', component: NoticiasComponent },
  { path: 'divisas', component: DivisasComponent },
  { path: 'horoscopo', component: HoroscopoComponent },
  { path: 'covid', component: CovidComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'noticias' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
