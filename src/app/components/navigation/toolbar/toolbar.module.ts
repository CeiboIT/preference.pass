import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule, MdToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
