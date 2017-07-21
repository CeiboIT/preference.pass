import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupLocationCardComponent } from './pickup-location-card.component';
import {MdButtonModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [PickupLocationCardComponent],
  exports: [PickupLocationCardComponent]
})
export class PickupLocationCardModule { }
