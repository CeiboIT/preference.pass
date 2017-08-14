import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsContainerComponent } from './subscriptions-container.component';
import { UsersubscriptionsModule } from '../../../components/user/user-subscriptions/user-subscriptions.module';

@NgModule({
  imports: [
    CommonModule,
    UsersubscriptionsModule
  ],
  exports: [
    SubscriptionsContainerComponent
  ],
  declarations: [
    SubscriptionsContainerComponent
  ]
})

export class SubscriptionsContainerModule { }
