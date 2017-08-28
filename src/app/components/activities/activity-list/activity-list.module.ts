import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { ActivityListComponent } from './activity-list.component';
import { ActivityCardModule } from '../../widgets/activity-card/activity-card.module';
import { ActivityCardLoaderModule } from '../../loaders/activity-card-loader/activity-list.module';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ActivityCardModule,
    ActivityCardLoaderModule,
    SwiperModule
  ],
  declarations: [ActivityListComponent],
  exports: [ActivityListComponent]
})
export class ActivityListModule { }
