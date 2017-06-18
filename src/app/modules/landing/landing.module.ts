import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './landing.routes';
import { LandingContainerComponent } from './landing-container/landing-container.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LandingContainerComponent],
  exports: [LandingContainerComponent]
})
export class LandingModule { }
