import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanionChargeFormModule } from '../companion-charge-form/companion-charge-form.module';
import { CompanionsFormComponent } from './companions-form.component';
import { PersonElementModule } from "./person-element/person-element.module";
import { MdCardModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CompanionChargeFormModule,
    MdCardModule,
    PersonElementModule
  ],
  declarations: [CompanionsFormComponent],
  exports: [CompanionsFormComponent]
})
export class CompanionsFormModule { }
