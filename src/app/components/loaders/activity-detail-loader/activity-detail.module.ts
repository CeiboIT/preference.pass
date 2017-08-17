import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDetailLoaderComponent } from './activity-detail-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityDetailLoaderComponent],
  exports: [ActivityDetailLoaderComponent]
})
export class ActivityDetailLoaderModule { }
