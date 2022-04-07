import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from 'src/app/authors/authors.service';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { Publisher } from 'src/app/models/publisher';
import { Room } from 'src/app/models/rooms';
import { Shelf } from 'src/app/models/shelf';
import { StatusType } from 'src/app/models/status-type';
import { PublishersService } from 'src/app/publishers/publishers.service';
import { RoomsService } from 'src/app/settings/rooms/rooms.service';
import { ShelvesService } from 'src/app/settings/shelves/shelves.service';
import { StatusTypesService } from 'src/app/settings/status-types/status-types.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'hb-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {

  book! : Book;
  
  bookForm! : FormGroup;

  rooms! : Room[];

  authors! : Author[];

  publishers! : Publisher[];

  shelves! : Shelf[];

  statusTypes! : StatusType[];

  selectedAuthor! : Author;

  selectedPublisher! : Publisher;

  selectedShelf! : Shelf;

  selectedStatusType! : StatusType;

  constructor(private booksService : BooksService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder,
              private roomService : RoomsService,
              private authorsService : AuthorsService,
              private publishersService : PublishersService,
              private shevesService : ShelvesService,
              private statusTypeService : StatusTypesService) { }

  ngOnInit(): void {
    this.loadBook();
    this.bookForm = this.buildBookForm();
    this.getRoomsForSelect();
    this.getAuthorsForSelect();
    this.getPublishersForSelect();
    this.getShelvesForSelect();
    this.getStatusTypesForSelect();
  }

  loadBook() {
    this.book = this.route.snapshot.data['book'];
    this.selectedAuthor = this.book.author;
    this.selectedPublisher = this.book.publisher;
    this.selectedShelf = this.book.shelf;
    this.selectedStatusType = this.book.status.statusType;
  }

  getRoomsForSelect() {
    this.roomService.getRooms().subscribe(res => {
      this.rooms = res;
    });
  }

  getAuthorsForSelect() {
    this.authorsService.getAuthors().subscribe(res => {
      this.authors = res;
    });
  }

  getPublishersForSelect() {
    this.publishersService.getPublishers().subscribe(res => {
      this.publishers = res;
    });
  }

  getShelvesForSelect() {
    this.shevesService.getShelves().subscribe(res => {
      this.shelves = res;
    });
  }

  getStatusTypesForSelect() {
    this.statusTypeService.getStatusTypes().subscribe(res => {
      this.statusTypes = res;
    });
  }

  buildBookForm() {
    return this.formBuilder.group({
      name: [this.book.name, [Validators.required, Validators.minLength(3)]],
      author: [this.selectedAuthor, [Validators.required]],
      publisher: [this.selectedPublisher, [Validators.required]],
      shelf: [this.selectedShelf, [Validators.required]],
      status: this.formBuilder.group({
        comment: [this.book.status.comment, [Validators.maxLength(250)]],
        statusType: [this.selectedStatusType, [Validators.required]]
      })
    });
  }

  updateBook() {
    this.booksService.updateBook(this.book.id, this.bookForm.value).subscribe(() => {
      this.router.navigate(['/books']);  
    });
  }

  deleteBook() {
    this.booksService.deleteBook(this.book.id).subscribe(() => {
      this.router.navigate(['/books']);  
    });
  }
}
