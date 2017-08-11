import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalSavingComponent } from './total-saving.component';
/*
  Module that includes a reusable component
  that is capable to calculate the savings based on
  kids Amount, adults Amount and activity
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TotalSavingComponent],
  exports: [TotalSavingComponent]
})
export class TotalSavingModule { }
