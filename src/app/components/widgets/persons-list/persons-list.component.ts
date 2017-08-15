import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-persons-list',
  template: `
    <div class="row">
      <app-person-card class="col-md-4 col-sm-12 mb-2" [person]="person" *ngFor="let person of list"
                       [selectedPersons]="selectedPersons"
        (onPersonCardSelected)="onPersonCardSelected($event)"
      >
      </app-person-card>
    </div>
  `
})
export class PersonsListComponent implements OnInit {
  @Input() list;
  @Input() entityKey;
  @Input() parent: FormControl;
  public selectedPersons = [];

  constructor() { }

  ngOnInit() {
  }

  onPersonCardSelected($event) {
    let _value = $event;
    if (this.entityKey) {
        _value = $event[this.entityKey];
    }
    const _personIndex = this.selectedPersons.indexOf(_value);
    if ( _personIndex === -1 ) {
      this.selectedPersons.push(_value);
    } else {
      this.selectedPersons.splice(_personIndex, 1);
    }
    this.parent.setValue(this.selectedPersons);
  }

}
