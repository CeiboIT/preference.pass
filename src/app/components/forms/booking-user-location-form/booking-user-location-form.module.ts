import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingUserLocationFormComponent } from './booking-user-location-form.component';
import {FieldsModule} from '../fields/fields.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FieldsModule,
    ReactiveFormsModule
  ],
  declarations: [BookingUserLocationFormComponent],
  exports: [BookingUserLocationFormComponent]
})
export class BookingUserLocationFormModule { }
