import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { UserProfileContainerComponent } from './user-profile-container.component';
import { UserProfileModule } from '../../../components/user/user-profile/user-profile.module';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    UserProfileModule
  ],
  exports: [
    UserProfileContainerComponent
  ],
  declarations: [
    UserProfileContainerComponent
  ]
})

export class UserProfileContainerModule { }
