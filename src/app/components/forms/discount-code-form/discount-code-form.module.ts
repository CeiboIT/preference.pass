import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountCodeFormComponent } from './discount-code-form.component';
import {FieldsModule} from '../fields/fields.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FieldsModule,
    ReactiveFormsModule
  ],
  declarations: [DiscountCodeFormComponent],
  exports: [DiscountCodeFormComponent]
})
export class DiscountCodeFormModule { }
