import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountCardFormComponent } from './discount-card-form.component';
import {FieldsModule} from '../fields/fields.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FieldsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DiscountCardFormComponent],
  exports: [DiscountCardFormComponent]
})
export class DiscountCardFormModule { }
