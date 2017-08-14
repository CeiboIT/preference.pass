import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionsFormComponent } from './companions-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanionChargeFormModule} from '../companion-charge-form/companion-charge-form.module';
import {PersonsListModule} from '../../widgets/persons-list/persons-list.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PersonsListModule,
    CompanionChargeFormModule
  ],
  declarations: [CompanionsFormComponent],
  exports: [CompanionsFormComponent]
})
export class CompanionsFormModule { }
