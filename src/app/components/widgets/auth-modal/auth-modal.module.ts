import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal.component';
import {MdButtonModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [AuthModalComponent]
})
export class AuthModalModule { }
