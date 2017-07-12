import { CommonModule } from '@angular/common';
import { CompanionAmountComponent } from './companion-amount.component';
import { FieldsModule } from '../fields/fields.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FieldsModule
  ],
  declarations: [CompanionAmountComponent],
  exports: [CompanionAmountComponent]
})
export class CompanionAmountModule { }
