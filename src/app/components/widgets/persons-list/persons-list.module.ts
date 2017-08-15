import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsListComponent } from './persons-list.component';
import {PersonCardModule} from '../person-card/person-card.module';

@NgModule({
  imports: [
    CommonModule,
    PersonCardModule
  ],
  declarations: [PersonsListComponent],
  exports: [PersonsListComponent],
})
export class PersonsListModule { }
