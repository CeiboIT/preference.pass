import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionChargeFormComponent } from './companion-charge-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldsModule} from '../fields/fields.module';
import {MdButtonModule, MdDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsModule,
    MdButtonModule,
    MdDialogModule
  ],
  declarations: [CompanionChargeFormComponent],
  exports: [CompanionChargeFormComponent]
})
export class CompanionChargeFormModule { }
