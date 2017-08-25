import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPreviewComponent } from './booking-preview.component';
import { MdCardModule } from '@angular/material';
import { LocationMapModule } from "../../widgets/location-map/location-map.module";
import { BookingDetailCardModule } from "../../widgets/booking-detail-card/booking-detail-card.module";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    LocationMapModule,
    BookingDetailCardModule
  ],
  declarations: [BookingPreviewComponent],
  exports: [BookingPreviewComponent]
})

export class BookingPreviewModule { }
