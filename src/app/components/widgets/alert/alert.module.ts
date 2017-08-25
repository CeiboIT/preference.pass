import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SuccessAnimationModule } from "./success-animation/success-animation.module";

@NgModule({
  imports: [
    CommonModule,
    SuccessAnimationModule
  ],
  declarations: [AlertComponent]
})
export class AlertlModule { }
