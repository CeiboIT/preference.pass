import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCompanionsComponent } from './user-companions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserCompanionsComponent
  ],
  exports: [
    UserCompanionsComponent
  ]
})
export class UserCompanionsModule { }