import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDateSelectorFormComponent } from './booking-date-selector-form.component';
import {MdCardModule} from '@angular/material';
import { BookingDateElementComponent } from './booking-date-element/booking-date-element.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [BookingDateSelectorFormComponent, BookingDateElementComponent],
  exports: [BookingDateSelectorFormComponent]
})
export class BookingDateSelectorFormModule { }
