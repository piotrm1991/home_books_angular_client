import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'hb-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.less']
})
export class AuthorsListComponent implements OnInit {

  authors : Author[] = [];

  constructor(private authorsService : AuthorsService,
              private router : Router) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() : void{
    this.authorsService.getAuthors().subscribe((authors : Author[]) => {
      this.authors = authors;
    });
  }

  goToAuthorDetails(author : Author) {
    this.router.navigate(['/authors', author.id]);
  }

}
