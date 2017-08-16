import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {PickupLocationPreviewComponent} from './pickup-location-preview.component';
import {MdCardModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    MdCardModule
  ],
  declarations: [PickupLocationPreviewComponent],
  exports: [PickupLocationPreviewComponent]
})
export class PickupLocationPreviewModule { }
