import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'authors'},
  {path: 'authors', component: AuthorsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
