import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignupComponent } from './email-signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldsModule} from '../fields/fields.module';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    FieldsModule
  ],
  declarations: [EmailSignupComponent],
  exports: [EmailSignupComponent]
})
export class EmailSignupModule { }
