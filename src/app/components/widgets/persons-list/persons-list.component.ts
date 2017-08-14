import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-persons-list',
  template: `
    <div class="row">
      <app-person-card class="col-md-4 col-sm-12 mb-2" [person]="person" *ngFor="let person of list">
      </app-person-card>
    </div>
  `
})
export class PersonsListComponent implements OnInit {
  @Input() list;
  constructor() { }

  ngOnInit() {
  }

}
