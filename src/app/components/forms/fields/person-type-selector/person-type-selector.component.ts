import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-person-type-selector',
  template: `
    <div [formGroup]="parent">
      <md-radio-group class="d-flex justify-content-around" (change)="onChange($event)" formControlName="personType">
        <md-radio-button *ngFor="let type of options" [value]="type">
          {{type}}
        </md-radio-button>
      </md-radio-group>
    </div>
  `
})
export class PersonTypeSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  public options= ['Adult', 'Kid'];
  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    // this.parent.get('personType').setValue($event.value);
  }

}
