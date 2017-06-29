import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal.component';
import {MdButtonModule, MdDialogModule, MdInputModule} from '@angular/material';
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
    MdDialogModule,
    EmailSignupModule,
    FlexLayoutModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }
