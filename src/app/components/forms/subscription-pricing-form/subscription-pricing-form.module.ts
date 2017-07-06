import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPricingFormComponent } from './subscription-pricing-form.component';
import {FieldsModule} from '../fields/fields.module';

@NgModule({
  imports: [
    CommonModule,
    FieldsModule
  ],
  declarations: [SubscriptionPricingFormComponent],
  exports: [SubscriptionPricingFormComponent]
})
export class SubscriptionPricingFormModule { }
