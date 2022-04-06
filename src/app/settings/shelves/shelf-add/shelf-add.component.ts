import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/rooms';
import { Shelf } from 'src/app/models/shelf';
import { RoomsService } from '../../rooms/rooms.service';
import { ShelvesService } from '../shelves.service';

@Component({
  selector: 'hb-shelf-add',
  templateUrl: './shelf-add.component.html',
  styleUrls: ['./shelf-add.component.less']
})
export class ShelfAddComponent implements OnInit {

  shelf! : Shelf;
  
  shelfForm! : FormGroup;

  rooms! : Room[];

  constructor(private shelvesService : ShelvesService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder,
              private roomService : RoomsService) { }

  ngOnInit(): void {
    this.shelfForm = this.buildShelfForm();
    this.getRoomsForSelect();
  }

  getRoomsForSelect() {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  buildShelfForm() {
    return this.formBuilder.group({
      letter: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('[a-zA-Z ]*')]],
      number: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    });
  }

  addShelf() {
    this.shelvesService.addShelf(this.shelfForm.value).subscribe(() => {
      this.router.navigate(['/settings']);  
    });
  }
}
