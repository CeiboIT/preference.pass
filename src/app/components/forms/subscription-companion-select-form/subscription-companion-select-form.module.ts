import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionCompanionSelectFormComponent } from './subscription-companion-select-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SubscriptionCompanionSelectFormComponent],
  exports: [SubscriptionCompanionSelectFormComponent]
})
export class SubscriptionCompanionSelectFormModule { }
