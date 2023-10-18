import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'actors',
    loadChildren: () => import('./actors/actors.module').then((m) => m.ActorsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
