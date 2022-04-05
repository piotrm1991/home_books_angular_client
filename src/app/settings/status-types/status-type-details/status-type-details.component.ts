import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusType } from 'src/app/models/status-type';
import { StatusTypesService } from '../status-types.service';

@Component({
  selector: 'hb-status-type-details',
  templateUrl: './status-type-details.component.html',
  styleUrls: ['./status-type-details.component.less']
})
export class StatusTypeDetailsComponent implements OnInit {

  statusType! : StatusType;

  statusTypeForm! : FormGroup;

  constructor(private statusTypeService : StatusTypesService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loadStatusType();
    this.statusTypeForm = this.buildStatusTypeForm();
  }

  loadStatusType() {
    this.statusType = this.route.snapshot.data['statusType'];
  }

  buildStatusTypeForm() {
    return this.formBuilder.group({
      name: [this.statusType.name, [Validators.required, Validators.minLength(3)]]
    });
  }

  updateStatusType() {
    this.statusTypeService.updateStatusType(this.statusType.id, this.statusTypeForm.value).subscribe(() => {
      this.router.navigate(['/settings']);  
    });
  }

  deleteStatusType() {
    this.statusTypeService.deleteStatusType(this.statusType.id).subscribe(() => {
      this.router.navigate(['/settings']);
    })
  }
}
