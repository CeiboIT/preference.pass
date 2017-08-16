import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupTimeElementComponent } from './pickup-time-element/pickup-time-element.component';
import {MdCardModule} from '@angular/material';
import {PickupTimeListComponent} from './pickup-time-list.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  declarations: [PickupTimeListComponent, PickupTimeElementComponent],
  exports: [PickupTimeListComponent]
})
export class PickupTimeListModule { }
