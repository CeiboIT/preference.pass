import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { SubscriptionCompanionSelectFormComponent } from './subscription-companion-select-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdCardModule
  ],
  declarations: [ SubscriptionCompanionSelectFormComponent ],
  exports: [ SubscriptionCompanionSelectFormComponent ]
})
export class SubscriptionCompanionSelectFormModule { }
