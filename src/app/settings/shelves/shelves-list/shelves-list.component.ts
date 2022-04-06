import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shelf } from 'src/app/models/shelf';
import { ShelvesService } from '../shelves.service';

@Component({
  selector: 'hb-shelves-list',
  templateUrl: './shelves-list.component.html',
  styleUrls: ['./shelves-list.component.less']
})
export class ShelvesListComponent implements OnInit {

  shelves : Shelf[] = [];

  constructor(private shelveService : ShelvesService,
              private router : Router) { }

  ngOnInit(): void {
    this.loadShelves();
  }

  loadShelves() : void{
    this.shelveService.getShelves().subscribe((shelves : Shelf[]) => {
      this.shelves = shelves;
    });
  }

  goToShelfDetails(shelf : Shelf) {
    this.router.navigate(['/settings/shelves', shelf.id]);
  }

  goToNewShelves() {
    this.router.navigate(['addShelves']);
  }
}
