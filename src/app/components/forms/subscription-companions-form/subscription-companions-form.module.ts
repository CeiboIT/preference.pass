import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionCompanionsFormComponent } from './subscription-companions-form.component';
import {FieldsModule} from '../fields/fields.module';
import {MdButtonModule, MdCardModule} from '@angular/material';
import {PersonElementModule} from '../companions-form/person-element/person-element.module';
@NgModule({
  imports: [
    CommonModule,
    FieldsModule,
    PersonElementModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [SubscriptionCompanionsFormComponent],
  exports: [SubscriptionCompanionsFormComponent]
})
export class SubscriptionCompanionsFormModule { }
