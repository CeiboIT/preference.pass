import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { SubscriptionCompanionSelectFormComponent } from './subscription-companion-select-form.component';
import { PersonElementModule } from '../companions-form/person-element/person-element.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdCardModule,
    PersonElementModule
  ],
  declarations: [ SubscriptionCompanionSelectFormComponent ],
  exports: [ SubscriptionCompanionSelectFormComponent ]
})
export class SubscriptionCompanionSelectFormModule { }
