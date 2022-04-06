import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Shelf } from 'src/app/models/shelf';
import { ShelvesService } from '../shelves.service';

@Component({
  selector: 'hb-shelf-details',
  templateUrl: './shelf-details.component.html',
  styleUrls: ['./shelf-details.component.less']
})
export class ShelfDetailsComponent implements OnInit {

  shelf! : Shelf;

  shelfForm! : FormGroup;

  constructor(private shelvesService : ShelvesService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loadShelf();
    this.shelfForm = this.buildShelfForm();
  }

  loadShelf() {
    this.shelf = this.route.snapshot.data['shelf'];
  }

  buildShelfForm() {
    return this.formBuilder.group({
      idRoom: [this.shelf.room.id, [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
      letter: [this.shelf.letter, [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('[a-zA-Z ]*')]],
      number: [this.shelf.number, [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    });
  }

  updateShelf() {
    this.shelvesService.updateShelf(this.shelf.id, this.shelfForm.value).subscribe(() => {
      this.router.navigate(['/settings']);  
    });
  }

  deleteShelf() {
    this.shelvesService.deleteShelf(this.shelf.id).subscribe(() => {
      this.router.navigate(['/settings']);
    })
  }
}
