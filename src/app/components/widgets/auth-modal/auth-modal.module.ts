import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal.component';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailSignupModule} from '../../forms/email-signup/email-signup.module';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    MdDialogModule,
    EmailSignupModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }
