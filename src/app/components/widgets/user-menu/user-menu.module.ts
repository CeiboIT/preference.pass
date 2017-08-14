import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { UserMenuComponent } from './user-menu.component';
import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdMenuModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule
  ],
  declarations: [UserMenuComponent],
  exports: [UserMenuComponent]
})
export class UserMenuModule { }
