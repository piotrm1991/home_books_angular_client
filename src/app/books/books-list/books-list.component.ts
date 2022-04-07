import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'hb-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {

  books : Book[] = [];

  constructor(private booksService : BooksService,
              private router : Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() : void{
    this.booksService.getBooks().subscribe((books : Book[]) => {
      this.books = books;
    });
  }

  goToBookDetails(Book : Book) {
    this.router.navigate(['/books', Book.id]);
  }

  goToNewBook() {
    this.router.navigate(['/addBook']);
  }
}
