import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal.component';
import {MdDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }
