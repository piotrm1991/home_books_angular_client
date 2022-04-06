import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ShelvesListComponent } from './shelves-list/shelves-list.component';
import { ShelfDetailsComponent } from './shelf-details/shelf-details.component';
import { ShelfAddComponent } from './shelf-add/shelf-add.component';
import { ShelvesResolve } from './shelves-resolve.service';



@NgModule({
  declarations: [
    ShelvesListComponent,
    ShelfDetailsComponent,
    ShelfAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ShelvesListComponent,
    ShelfDetailsComponent
  ],
  providers: [
    ShelvesResolve
  ]
})
export class ShelvesModule { }
