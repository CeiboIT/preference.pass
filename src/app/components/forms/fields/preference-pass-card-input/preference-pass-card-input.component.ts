import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-preference-pass-card-input',
  template: `    
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input type="text" mdInput placeholder="Card Number" formControlName="code">
      </md-input-container>
     
    </div>
  `
})
export class PreferencePassCardInputComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() {

  }

  ngOnInit() {
    this.parent.get('code').setValidators([Validators.required, Validators.minLength(16), Validators.maxLength(16)]);
    this.parent.get('code').valueChanges.subscribe((changes) => {
      console.log(changes);
      console.log(this.parent.get('code').hasError('minLength'));

    });

    this.parent.get('code').statusChanges.subscribe((change) => {
      console.log(change);
    });
  }

}
