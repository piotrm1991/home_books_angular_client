import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersListComponent } from './publishers-list/publishers-list.component';
import { PublisherAddComponent } from './publisher-add/publisher-add.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { SharedModule } from '../shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PublisherResolve } from './publisher-resolve.service';



@NgModule({
  declarations: [
    PublishersListComponent,
    PublisherAddComponent,
    PublisherDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PublishersListComponent
  ],
  providers: [
    PublisherResolve
  ]
})
export class PublishersModule { }
