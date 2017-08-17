import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileContainerComponent } from './user-profile-container.component';
import { UserProfileModule } from '../../../components/user/user-profile/user-profile.module';

@NgModule({
  imports: [
    CommonModule,
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
