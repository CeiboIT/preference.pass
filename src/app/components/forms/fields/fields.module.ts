import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './email-input/email-input.component';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { UserFirstNameInputComponent } from './user-first-name-input/user-first-name-input.component';
import { UserLastNameInputComponent } from './user-last-name-input/user-last-name-input.component';
import { UserBirthDateComponent } from './user-birth-date/user-birth-date.component';
import {DateSelectModule} from './date-select/date-select.module';
import { KidsAmountInputComponent } from './kids-amount-input/kids-amount-input.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule,
    DateSelectModule
  ],
  declarations: [EmailInputComponent, PasswordComponent, UserFirstNameInputComponent,
    UserLastNameInputComponent, UserBirthDateComponent, KidsAmountInputComponent],
  exports: [EmailInputComponent, PasswordComponent, UserFirstNameInputComponent,
    UserLastNameInputComponent, UserBirthDateComponent, KidsAmountInputComponent]
})
export class FieldsModule { }
