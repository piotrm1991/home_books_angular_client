import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { PublisherResolve } from './publisher-resolve.service';
import { PublisherAddComponent } from './publisher-add/publisher-add.component';

const PUBLISHERS_ROUTES: Routes = [
  { 
    path: 'publishers/:id',
    component: <any>PublisherDetailsComponent,
    resolve: { publisher : PublisherResolve }
  },
  {
    path: 'newPublisher',
    component: <any>PublisherAddComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(PUBLISHERS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class PublishersRoutingModule { }
