import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorResolve } from './author-resolve.service';
import { Routes } from '@angular/router';

const AUTHORS_ROUTES: Routes = [
  { 
    path: 'cars/:id',
    component: <any>AuthorDetailsComponent,
    resolve: { car: AuthorResolve }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthorsRoutingModule { }
