import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-preference-pass-card-form',
  template: `    
    <form [formGroup]="parent" novalidate>
      <app-preference-pass-card-input [parent]="parent"></app-preference-pass-card-input>
    </form>
  `
})
export class PreferencePassCardFormComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
