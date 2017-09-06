import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpCardDisplayComponent } from './pp-card-display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PpCardDisplayComponent],
  exports: [PpCardDisplayComponent]
})
export class PpCardDisplayModule { }
