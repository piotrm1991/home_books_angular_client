import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusType } from 'src/app/models/status-type';
import { StatusTypesService } from '../status-types.service';

@Component({
  selector: 'hb-status-type-add',
  templateUrl: './status-type-add.component.html',
  styleUrls: ['./status-type-add.component.less']
})
export class StatusTypeAddComponent implements OnInit {

  statusType! : StatusType;
  
  statusTypeForm! : FormGroup;

  constructor(private statusTypeService : StatusTypesService,
              private route : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.statusTypeForm = this.buildStatusTypeForm();
  }

  buildStatusTypeForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addStatusType() {
    this.statusTypeService.addStatusType(this.statusTypeForm.value).subscribe(() => {
      this.router.navigate(['/settings']);  
    });
  }
}
