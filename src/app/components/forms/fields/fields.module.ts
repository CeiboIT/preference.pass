import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './email-input/email-input.component';
import {MdCheckboxModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { UserFirstNameInputComponent } from './user-first-name-input/user-first-name-input.component';
import { UserLastNameInputComponent } from './user-last-name-input/user-last-name-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdCheckboxModule
  ],
  declarations: [EmailInputComponent, PasswordComponent, UserFirstNameInputComponent, UserLastNameInputComponent],
  exports: [EmailInputComponent, PasswordComponent, UserFirstNameInputComponent, UserLastNameInputComponent]
})
export class FieldsModule { }
