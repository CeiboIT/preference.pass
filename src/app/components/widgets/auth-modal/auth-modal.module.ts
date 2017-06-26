import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal.component';
import {MdButtonModule, MdDialogModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailSignupModule} from '../../forms/email-signup/email-signup.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule,
    EmailSignupModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }
