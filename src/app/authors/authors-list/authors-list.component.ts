import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorsService } from '../authors.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'hb-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.less']
})
export class AuthorsListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'noBooks'];
  dataSource!: MatTableDataSource<Author>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  authors : Author[] = [];

  constructor(private authorsService : AuthorsService,
              private router : Router) { }
              
  ngOnInit() {
    this.loadAuthors();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadAuthors() : void{
    this.authorsService.getAuthors().subscribe((authors) => {
      this.dataSource = new MatTableDataSource(authors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  goToAuthorDetails(author : Author) {
    this.router.navigate(['/authors', author.id]);
  }

  goToNewAuthor() {
    this.router.navigate(['/addAuthor']);
  }
}