import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionChargeFormComponent } from './companion-charge-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldsModule} from '../fields/fields.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsModule
  ],
  declarations: [CompanionChargeFormComponent],
  exports: [CompanionChargeFormComponent]
})
export class CompanionChargeFormModule { }
