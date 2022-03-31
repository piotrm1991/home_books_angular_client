import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'hb-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.less']
})
export class AuthorDetailsComponent implements OnInit {

  author! : Author;

  constructor(private authorService : AuthorsService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
  }

  loadAuthor() {
    this.author = this.route.snapshot.data['author'];
  }

}
