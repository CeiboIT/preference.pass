import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitySavingComponent } from './activity-saving.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ActivitySavingComponent
  ],
  exports: [
      ActivitySavingComponent
  ]
})
export class ActivitySavingModule { }
