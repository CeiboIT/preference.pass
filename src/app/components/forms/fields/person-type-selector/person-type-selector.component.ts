import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-person-type-selector',
  template: `
    <md-radio-group class="example-radio-group" (change)="onChange($event)">
      <md-radio-button class="example-radio-button" *ngFor="let type of options" [value]="type">
        {{type}}
      </md-radio-button>
    </md-radio-group>
  `
})
export class PersonTypeSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  public options= ['Adult', 'Kid'];
  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    this.parent.get('personType').setValue($event.value);
  }

}
