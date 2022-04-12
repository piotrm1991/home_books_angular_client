import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ShelvesListComponent } from './shelves-list/shelves-list.component';
import { ShelfDetailsComponent } from './shelf-details/shelf-details.component';
import { ShelfAddComponent } from './shelf-add/shelf-add.component';
import { ShelvesResolve } from './shelves-resolve.service';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



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
    SharedModule,
    MatTableModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
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
