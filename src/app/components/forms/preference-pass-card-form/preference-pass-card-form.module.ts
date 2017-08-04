import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencePassCardFormComponent } from './preference-pass-card-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldsModule} from '../fields/fields.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsModule
  ],
  declarations: [PreferencePassCardFormComponent],
  exports: [PreferencePassCardFormComponent]
})
export class PreferencePassCardFormModule { }
