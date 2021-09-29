import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListAltComponent } from './movie-list-alt/movie-list-alt.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListAltComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class MoviesModule { }
