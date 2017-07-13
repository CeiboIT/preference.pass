import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityListComponent} from './activity-list.component';
import {ActivityCardModule} from '../../widgets/activity-card/activity-card.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityCardModule
  ],
  declarations: [ActivityListComponent],
  exports: [ActivityListComponent]
})
export class ActivityListModule { }
