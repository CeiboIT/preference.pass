import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companion-charge-form',
  template: `
    <div [formGroup]="parent">
      <h2>
        Charge companion
      </h2>
      <app-person-type-selector [parent]="parent"></app-person-type-selector>   
    </div>
  `
})
export class CompanionChargeFormComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }


  ngOnInit() {
  }

}
