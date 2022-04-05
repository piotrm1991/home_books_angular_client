import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'hb-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.less']
})
export class RoomDetailsComponent implements OnInit {

  room! : Room;

  roomForm! : FormGroup;

  constructor(private roomService : RoomsService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loadRoom();
    this.roomForm = this.buildRoomForm();
  }

  loadRoom() {
    this.room = this.route.snapshot.data['room'];
  }

  buildRoomForm() {
    return this.formBuilder.group({
      name: [this.room.name, [Validators.required, Validators.minLength(3)]]
    });
  }

  updateRoom() {
    this.roomService.updateRoom(this.room.id, this.roomForm.value).subscribe(() => {
      this.router.navigate(['/settings']);  
    });
  }

  deleteRoom() {
    this.roomService.deleteRoom(this.room.id).subscribe(() => {
      this.router.navigate(['/settings']);
    })
  }
}
