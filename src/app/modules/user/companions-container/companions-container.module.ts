import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionsContainerComponent } from './companions-container.component';
import { UserCompanionsModule } from '../../../components/user/user-companions/user-companions.module';

@NgModule({
  imports: [
    CommonModule,
    UserCompanionsModule
  ],
  exports: [
    CompanionsContainerComponent
  ],
  declarations: [
    CompanionsContainerComponent
  ]
})

export class CompanionsContainerModule { }
