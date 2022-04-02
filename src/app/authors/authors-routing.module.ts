import { NgModule } from '@angular/core';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorResolve } from './author-resolve.service';
import { RouterModule, Routes } from '@angular/router';

const AUTHORS_ROUTES: Routes = [
  { 
    path: 'authors/:id',
    component: <any>AuthorDetailsComponent,
    resolve: { author: AuthorResolve }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AUTHORS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthorsRoutingModule { }
