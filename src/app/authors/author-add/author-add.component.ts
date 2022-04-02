import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'hb-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.less']
})
export class AuthorAddComponent implements OnInit {

  author! : Author;
  
  authorForm! : FormGroup;

  constructor(private authorService : AuthorsService,
    private route : ActivatedRoute,
    private router : Router,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.authorForm = this.buildAuthorForm();
  }

  buildAuthorForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addAuthor() {
    this.authorService.addAuthor(this.authorForm.value).subscribe(() => {
      this.router.navigate(['/authors']);  
    });
  }
}
