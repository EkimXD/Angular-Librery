import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoListComponent } from './components/juego-list/juego-list.component';
import { AddJuegoComponent } from './components/add-juego/add-juego.component';

const routes: Routes = [
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: 'libros', component: JuegoListComponent },
  { path: 'add', component: AddJuegoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
