import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoswipeComponent } from './photoswipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoswipeComponent
  ],
  exports: [
    PhotoswipeComponent
  ]
})
export class PhotoswipeModule { }
