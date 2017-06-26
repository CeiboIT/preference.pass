import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityCardComponent],
  bootstrap: [ActivityCardComponent]
})
export class ActivityCardModule { }
