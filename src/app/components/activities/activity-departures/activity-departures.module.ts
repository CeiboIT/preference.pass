import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDeparturesComponent } from './activity-departures.component';
import { PickupLocationCardModule } from '../../widgets/pickup-location-card/pickup-location-card.module';

@NgModule({
  imports: [
    CommonModule,
    PickupLocationCardModule
  ],
  declarations: [
    ActivityDeparturesComponent
  ],
  exports: [
    ActivityDeparturesComponent
  ]
})
export class ActivityDeparturesModule { }
