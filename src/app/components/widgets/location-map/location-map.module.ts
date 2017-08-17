import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationMapComponent } from './location-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
  ],
  declarations: [
    LocationMapComponent
  ],
  exports: [
    LocationMapComponent
  ]
})
export class LocationMapModule { }
