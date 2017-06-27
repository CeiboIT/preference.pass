import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './email-input/email-input.component';
import {MdCheckboxModule, MdIconModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { UserFirstNameInputComponent } from './user-first-name-input/user-first-name-input.component';
import { UserLastNameInputComponent } from './user-last-name-input/user-last-name-input.component';
import { UserBirthDateComponent } from './user-birth-date/user-birth-date.component';
import {DateSelectModule} from './date-select/date-select.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdIconModule,
    MdCheckboxModule,
    DateSelectModule
  ],
  declarations: [EmailInputComponent, PasswordComponent, UserFirstNameInputComponent,
    UserLastNameInputComponent, UserBirthDateComponent],
  exports: [EmailInputComponent, PasswordComponent, UserFirstNameInputComponent,
    UserLastNameInputComponent, UserBirthDateComponent]
})
export class FieldsModule { }
