import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityContainerComponent } from './activity-container.component';
import { ActivityDetailComponent } from '../../../components/activities/activity-detail/activity-detail.component';
import { PhotoGalleryComponent } from '../../../components/activities/activity-detail/photo-gallery/photo-gallery.component';
import { AgmCoreModule } from '@agm/core';
import { MdButtonModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    MdButtonModule,
    MdCardModule,
  ],
  exports: [
    ActivityContainerComponent
  ],
  declarations: [
    ActivityContainerComponent, 
    ActivityDetailComponent,
    PhotoGalleryComponent
  ]
})

export class ActivityContainerModule { }
