import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { SharedModule } from '../shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorResolve } from './author-resolve.service';



@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AuthorsListComponent
  ],
  providers: [
    AuthorResolve
  ]
})
export class AuthorsModule { }
