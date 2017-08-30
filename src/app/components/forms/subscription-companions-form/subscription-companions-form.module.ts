import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionCompanionsFormComponent } from './subscription-companions-form.component';
import {FieldsModule} from '../fields/fields.module';
import {MdButtonModule, MdCardModule, MdDialogModule} from '@angular/material';
import {PersonElementModule} from '../companions-form/person-element/person-element.module';
import {CompanionChargeFormModule} from '../companion-charge-form/companion-charge-form.module';
@NgModule({
  imports: [
    CommonModule,
    FieldsModule,
    PersonElementModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    CompanionChargeFormModule
  ],
  declarations: [SubscriptionCompanionsFormComponent],
  exports: [SubscriptionCompanionsFormComponent]
})
export class SubscriptionCompanionsFormModule { }
