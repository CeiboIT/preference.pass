import { NgModule } from '@angular/core';
import { ActivityDetailComponent } from './activity-detail.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { RateComponent } from './rate/rate.component';
import { SavingComponent } from './saving/saving.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    FroalaViewModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [
    ActivityDetailComponent, 
    PhotoGalleryComponent, 
    RateComponent, 
    SavingComponent
  ],
  exports: [ActivityDetailComponent]
})
export class ActivityDetailModule { }
