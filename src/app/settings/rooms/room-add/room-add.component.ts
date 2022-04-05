import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'hb-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.less']
})
export class RoomAddComponent implements OnInit {

  room! : Room;
  
  roomForm! : FormGroup;

  constructor(private roomService : RoomsService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.roomForm = this.buildRoomForm();
  }

  buildRoomForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addRoom() {
    this.roomService.addRoom(this.roomForm.value).subscribe(() => {
      this.router.navigate(['/settings']);  
    });
  }
}
