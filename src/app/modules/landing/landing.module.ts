import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing-container/landing-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingContainerComponent],
  exports: [LandingContainerComponent]
})
export class LandingModule { }
