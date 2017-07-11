import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountCardContainerComponent } from './discount-card-container.component';
import { DiscountCardFormModule } from '../../../../components/forms/discount-card-form/discount-card-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DiscountCardFormModule,
    ReactiveFormsModule,
    FormsModule,
    MdButtonModule
  ],
  declarations: [DiscountCardContainerComponent],
  exports: [DiscountCardContainerComponent]
})
export class DiscountCardContainerModule { }
