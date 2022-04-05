import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'hb-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.less']
})
export class RoomsListComponent implements OnInit {

  rooms : Room[] = [];

  constructor(private roomService : RoomsService,
              private router : Router) { }

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() : void{
    this.roomService.getRooms().subscribe((rooms : Room[]) => {
      this.rooms = rooms;
    });
  }

  goToRoomDetails(room : Room) {
    this.router.navigate(['/settings/rooms', room.id]);
  }

  goToNewRoom() {
    this.router.navigate(['newRoom']);
  }

}
