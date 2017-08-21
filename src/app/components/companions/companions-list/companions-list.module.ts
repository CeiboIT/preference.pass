import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionsListComponent } from './companions-list.component';
import { CompanionsListElementComponent } from './companions-list-element/companions-list-element.component';
import {MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  declarations: [CompanionsListComponent, CompanionsListElementComponent]
})
export class CompanionsListModule { }
