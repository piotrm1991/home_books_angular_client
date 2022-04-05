import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomResolve } from './room-resolve.service';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { RoomAddComponent } from './room-add/room-add.component';



@NgModule({
  declarations: [
    RoomsListComponent,
    RoomDetailsComponent,
    RoomAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RoomsListComponent,
    RoomDetailsComponent
  ],
  providers: [
    RoomResolve
  ]
})
export class RoomsModule { }
