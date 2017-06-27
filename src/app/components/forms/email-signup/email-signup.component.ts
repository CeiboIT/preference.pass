import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-signup',
  template: `
    <div [formGroup]="parent">
      <app-email-input [parent]="parent"></app-email-input>
      <app-user-first-name-input [parent]="parent"></app-user-first-name-input>
      <app-user-last-name-input [parent]="parent"></app-user-last-name-input>
      <app-password [parent]="parent"></app-password>
      <div fxFlex>
        <app-date-select [parent]="parent"></app-date-select>
        <div fxFlex>
          Para poder registrarte, debes ser mayor de 18 años. El resto de usuarios no podrá ver tu fecha de nacimiento.
        </div>
      </div>
      <div>
        <md-checkbox>
          Me gustaría recibir cupones, promociones, encuestas y actualizaciones por correo electrónico sobre Airbnb y sus socios.
        </md-checkbox>
      </div>
    </div>
  `
})
export class EmailSignupComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}

}
