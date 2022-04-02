import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  authorForm! : FormGroup;

  constructor(private authorService : AuthorsService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loadAuthor();
    this.authorForm = this.buildAuthorForm();
  }

  loadAuthor() {
    this.author = this.route.snapshot.data['author'];
  }

  buildAuthorForm() {
    return this.formBuilder.group({
      name: this.author.name
    });
  }

  updateAuthor() {
    console.log("...");
    this.router.navigate(['/authors']);
  }
}
