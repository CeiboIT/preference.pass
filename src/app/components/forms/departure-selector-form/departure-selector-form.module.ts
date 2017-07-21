import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartureSelectorFormComponent } from './departure-selector-form.component';
import {ActivityDeparturesModule} from '../../activities/activity-departures/activity-departures.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityDeparturesModule
  ],
  declarations: [DepartureSelectorFormComponent]
})
export class DepartureSelectorFormModule { }
