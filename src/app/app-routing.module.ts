import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { PublishersListComponent } from './publishers/publishers-list/publishers-list.component';
import { SettingsShowComponent } from './settings/settings-show/settings-show.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'authors'},
  {path: 'authors', component: AuthorsListComponent},
  {path: 'publishers', component: PublishersListComponent},
  {path: 'settings', component: SettingsShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
