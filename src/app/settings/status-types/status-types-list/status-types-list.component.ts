import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusType } from 'src/app/models/status-type';
import { StatusTypesService } from '../status-types.service';

@Component({
  selector: 'hb-status-types-list',
  templateUrl: './status-types-list.component.html',
  styleUrls: ['./status-types-list.component.less']
})
export class StatusTypesListComponent implements OnInit {

  statusTypes : StatusType[] = [];

  constructor(private statusTypeService : StatusTypesService,
              private router : Router) { }

  ngOnInit(): void {
    this.loadStatusTypes();
  }

  loadStatusTypes() : void{
    this.statusTypeService.getStatusTypes().subscribe((statusTypes : StatusType[]) => {
      this.statusTypes = statusTypes;
    });
  }

  goToStatusTypeDetails(statusType : StatusType) {
    this.router.navigate(['/settings/statusTypes', statusType.id]);
  }

  goToNewStatusType() {
    this.router.navigate(['newStatusType']);
  }
}
