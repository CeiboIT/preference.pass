import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDetailComponent } from './activity-detail.component';
import { AgmCoreModule } from '@agm/core';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PriceDisplayerComponent } from './price-displayer/price-displayer.component';
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
    PriceDisplayerComponent,
    RateComponent, 
    SavingComponent
  ],
  exports: [
    ActivityDetailComponent
  ]
})
export class ActivityDetailModule { }
