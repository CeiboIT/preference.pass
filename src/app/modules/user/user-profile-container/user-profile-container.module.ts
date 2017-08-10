import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileContainerComponent } from './user-profile-container.component';
import { MdButtonModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule
  ],
  exports: [
    UserProfileContainerComponent
  ],
  declarations: [
    UserProfileContainerComponent
  ]
})

export class UserProfileContainerModule { }
