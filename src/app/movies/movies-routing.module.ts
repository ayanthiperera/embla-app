import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListAltComponent } from './movie-list-alt/movie-list-alt.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'alt',
    component: MovieListAltComponent
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
