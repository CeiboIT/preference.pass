import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardLoaderComponent } from './activity-card-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityCardLoaderComponent],
  exports: [ActivityCardLoaderComponent]
})
export class ActivityCardLoaderModule { }
