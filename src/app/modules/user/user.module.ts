import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user.routes';
import { UserProfileContainerModule } from './user-profile-container/user-profile-container.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    UserProfileContainerModule
  ],
  exports: [],
  declarations: []
})

export class UserModule { }
