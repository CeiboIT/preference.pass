import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickLocationAndTimeSelectionFormComponent } from './pick-location-and-time-selection-form.component';
import {ActivityDeparturesModule} from '../../activities/activity-departures/activity-departures.module';
import {PickupLocationCardModule} from '../../widgets/pickup-location-card/pickup-location-card.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityDeparturesModule,
    PickupLocationCardModule
  ],
  declarations: [PickLocationAndTimeSelectionFormComponent],
  exports: [PickLocationAndTimeSelectionFormComponent]
})
export class PickLocationAndTimeSelectionFormModule { }
