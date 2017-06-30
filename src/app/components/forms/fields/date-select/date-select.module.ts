import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaySelectComponent } from './day-select/day-select.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { YearSelectComponent } from './year-select/year-select.component';
import {MdSelectModule} from '@angular/material';
import { DateSelectComponent } from './date-select.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, MdSelectModule, FlexLayoutModule
  ],
  declarations: [DaySelectComponent, MonthSelectComponent, YearSelectComponent, DateSelectComponent],
  exports: [DateSelectComponent]
})
export class DateSelectModule { }
