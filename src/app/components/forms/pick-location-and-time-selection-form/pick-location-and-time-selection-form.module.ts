import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickLocationAndTimeSelectionFormComponent } from './pick-location-and-time-selection-form.component';
import {ActivityDeparturesModule} from '../../activities/activity-departures/activity-departures.module';
import {PickupLocationCardModule} from '../../widgets/pickup-location-card/pickup-location-card.module';
import {MdAutocompleteModule, MdCardModule, MdInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PickupTimeListModule} from './pickup-time-list/pickup-time-list.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityDeparturesModule,
    PickupLocationCardModule,
    MdAutocompleteModule,
    MdInputModule,
    MdCardModule,
    FormsModule,
    ReactiveFormsModule,
    PickupTimeListModule
  ],
  declarations: [PickLocationAndTimeSelectionFormComponent],
  exports: [PickLocationAndTimeSelectionFormComponent]
})
export class PickLocationAndTimeSelectionFormModule { }
