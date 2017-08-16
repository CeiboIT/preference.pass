import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingPreviewComponent} from './booking-preview.component';
import {MdCardModule} from '@angular/material';
import {PickupLocationPreviewModule} from './pickup-location-preview/pickup-location-preview.module';


@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    PickupLocationPreviewModule
  ],
  declarations: [BookingPreviewComponent],
  exports: [BookingPreviewComponent]
})
export class BookingPreviewModule { }
