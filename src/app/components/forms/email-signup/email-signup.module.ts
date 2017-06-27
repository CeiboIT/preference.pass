import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignupComponent } from './email-signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldsModule} from '../fields/fields.module';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {DateSelectModule} from "../fields/date-select/date-select.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    FieldsModule,
    DateSelectModule
  ],
  declarations: [EmailSignupComponent],
  exports: [EmailSignupComponent]
})
export class EmailSignupModule { }
