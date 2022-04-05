import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { PublishersService } from '../publishers.service';

@Component({
  selector: 'hb-publisher-add',
  templateUrl: './publisher-add.component.html',
  styleUrls: ['./publisher-add.component.less']
})
export class PublisherAddComponent implements OnInit {

  publisher! : Publisher;
  
  publisherForm! : FormGroup;

  constructor(private publisherService : PublishersService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.publisherForm = this.buildPublisherForm();
  }

  buildPublisherForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addPublisher() {
    this.publisherService.addPublisher(this.publisherForm.value).subscribe(() => {
      this.router.navigate(['/publishers']);  
    });
  }
}
