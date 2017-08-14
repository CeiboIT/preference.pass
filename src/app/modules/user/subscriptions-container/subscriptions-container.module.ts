import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsContainerComponent } from './subscriptions-container.component';
//import { UserProfileModule } from '../../../components/user/user-profile/user-profile.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SubscriptionsContainerComponent
  ],
  declarations: [
    SubscriptionsContainerComponent
  ]
})

export class SubscriptionsContainerModule { }
