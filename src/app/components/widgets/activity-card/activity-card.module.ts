import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdButtonModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    FlexLayoutModule,
  ],
  declarations: [ActivityCardComponent],
  bootstrap: [ActivityCardComponent]
})
export class ActivityCardModule { }
