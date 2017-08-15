import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card.component';
import {MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  declarations: [PersonCardComponent],
  exports: [PersonCardComponent]
})
export class PersonCardModule { }
