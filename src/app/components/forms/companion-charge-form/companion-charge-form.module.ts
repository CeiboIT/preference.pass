import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionChargeFormComponent } from './companion-charge-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldsModule} from '../fields/fields.module';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsModule,
    MdButtonModule
  ],
  declarations: [CompanionChargeFormComponent],
  exports: [CompanionChargeFormComponent]
})
export class CompanionChargeFormModule { }
