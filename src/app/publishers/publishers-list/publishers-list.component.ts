import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { PublishersService } from '../publishers.service';

@Component({
  selector: 'hb-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.less']
})
export class PublishersListComponent implements OnInit {


  publishers : Publisher[] = [];

  constructor(private publisherService : PublishersService,
              private router : Router) { }

  ngOnInit(): void {
    this.loadPublishers();
  }

  loadPublishers() : void{
    this.publisherService.getPublishers().subscribe((publisher : Publisher[]) => {
      this.publishers = publisher;
    });
  }

  goToPublisherDetails(publisher : Publisher) {
    this.router.navigate(['/publishers', publisher.id]);
  }

  goToNewPublisher() {
    this.router.navigate(['/newPublisher']);
  }
}
