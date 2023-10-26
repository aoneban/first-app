import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ActorPersonalComponent } from './actor-personal/actor-personal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'actor/:id', component: ActorPersonalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
