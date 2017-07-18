import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityDetailComponent} from './activity-detail.component';
import {MdButtonModule, MdCardModule} from '@angular/material';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {RateComponent} from './rate/rate.component';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    FroalaViewModule,
    AgmCoreModule,
    MdButtonModule
  ],
  declarations: [ActivityDetailComponent, PhotoGalleryComponent, RateComponent],
  exports: [ActivityDetailComponent]
})
export class ActivityDetailModule { }
