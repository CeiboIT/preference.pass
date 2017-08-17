import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPreviewComponent } from './booking-preview.component';
import { MdCardModule } from '@angular/material';
import { LocationMapModule } from "../../widgets/location-map/location-map.module";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    LocationMapModule
  ],
  declarations: [BookingPreviewComponent],
  exports: [BookingPreviewComponent]
})

export class BookingPreviewModule { }
