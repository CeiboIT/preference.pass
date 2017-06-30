import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-signup',
  template: `
    <div [formGroup]="parent" fxLayout="row">
      <div style="width: 100%">
        <div>
          <app-email-input [parent]="parent"></app-email-input>
        </div>
        <div>
          <app-user-first-name-input [parent]="parent"></app-user-first-name-input>
        </div>
        <div>
            <app-user-last-name-input [parent]="parent"></app-user-last-name-input>
        </div>
        <div>
            <app-password [parent]="parent"></app-password>
        </div>
        <div>
           <app-date-select [parent]="parent" [parentKey]="'birthDate'"></app-date-select>
        </div>
        <!--<div fxFlex>
          Para poder registrarte, debes ser mayor de 18 años. El resto de usuarios no podrá ver tu fecha de nacimiento.
        </div>-->
      </div>
      <div>
        <!-- <md-checkbox>
          Me gustaría recibir cupones, promociones, encuestas y actualizaciones por correo electrónico sobre Airbnb y sus socios.
        </md-checkbox> -->
      </div>
    </div>
  `
})
export class EmailSignupComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}

}
