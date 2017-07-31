import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionsSelectionFormComponent } from './companions-selection-form.component';
import {FieldsModule} from '../fields/fields.module';

@NgModule({
  imports: [
    CommonModule,
    FieldsModule
  ],
  declarations: [CompanionsSelectionFormComponent],
  exports: [CompanionsSelectionFormComponent]
})
export class CompanionsSelectionFormModule { }
