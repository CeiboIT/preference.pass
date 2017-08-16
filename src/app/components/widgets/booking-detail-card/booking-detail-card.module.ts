import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdCardModule} from '@angular/material';
import {BookingDetailCardComponent} from './booking-detail-card.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    AgmCoreModule
  ],
  declarations: [BookingDetailCardComponent],
  exports: [BookingDetailCardComponent]
})
export class BookingDetailCardModule { }
