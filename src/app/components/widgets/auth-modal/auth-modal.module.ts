import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal.component';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailSignupModule} from '../../forms/email-signup/email-signup.module';
import {EmailLoginModule} from '../../forms/email-login/email-login.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    MdDialogModule,
    EmailSignupModule,
    EmailLoginModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }
