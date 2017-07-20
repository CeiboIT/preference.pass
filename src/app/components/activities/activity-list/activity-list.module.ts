import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activity-list.component';
import { ActivityCardModule } from '../../widgets/activity-card/activity-card.module';
import { MdButtonModule } from '@angular/material';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    ActivityCardModule,
    MdButtonModule,
    SwiperModule
  ],
  declarations: [ActivityListComponent],
  exports: [ActivityListComponent]
})
export class ActivityListModule { }
