import { AuthModalComponent } from './auth-modal.component';
import { CommonModule } from '@angular/common';
import { EmailLoginModule } from '../../forms/email-login/email-login.module';
import { EmailSignupModule } from '../../forms/email-signup/email-signup.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule
  } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    EmailLoginModule,
    EmailSignupModule,
    FormsModule,
    MdButtonModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    ReactiveFormsModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }
