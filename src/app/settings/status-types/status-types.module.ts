import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusTypesListComponent } from './status-types-list/status-types-list.component';
import { StatusTypeDetailsComponent } from './status-type-details/status-type-details.component';
import { StatusTypeAddComponent } from './status-type-add/status-type-add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { StatusTypeResolve } from './status-type-resolve.service';



@NgModule({
  declarations: [
    StatusTypesListComponent,
    StatusTypeDetailsComponent,
    StatusTypeAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    StatusTypesListComponent,
    StatusTypeDetailsComponent
  ],
  providers: [
    StatusTypeResolve
  ]
})
export class StatusTypesModule { }
