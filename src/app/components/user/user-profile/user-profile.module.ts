import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { MdButtonModule, MdCardModule, MdListModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, 
    MdCardModule,
    MdListModule,
    MdIconModule
  ],
  declarations: [
    UserProfileComponent
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModule { }
