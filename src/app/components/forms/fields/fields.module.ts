import { AmountInputComponent } from './amount-input/amount-input.component';
import { CommonModule } from '@angular/common';
import { DateSelectModule } from './date-select/date-select.module';
import { EmailInputComponent } from './email-input/email-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule, MdRadioModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { PasswordComponent } from './password/password.component';
import { PpDiscountCardInputComponent } from './pp-discount-card-input/pp-discount-card-input.component';
import { SubscriptionPricingCardComponent } from './subscription-pricing-card/subscription-pricing-card.component';
import { UserBirthDateComponent } from './user-birth-date/user-birth-date.component';
import { UserFirstNameInputComponent } from './user-first-name-input/user-first-name-input.component';
import { UserLastNameInputComponent } from './user-last-name-input/user-last-name-input.component';
import { PersonTypeSelectorComponent } from './person-type-selector/person-type-selector.component';
import { UserFullnameComponent } from './user-fullname/user-fullname.component';

@NgModule({
  imports: [
    CommonModule,
    DateSelectModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdRadioModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AmountInputComponent,
    EmailInputComponent,
    PasswordComponent,
    PpDiscountCardInputComponent,
    SubscriptionPricingCardComponent,
    UserBirthDateComponent,
    UserFirstNameInputComponent,
    UserLastNameInputComponent,
    PersonTypeSelectorComponent,
    UserFullnameComponent,
  ],
  exports: [
    AmountInputComponent,
    EmailInputComponent,
    PasswordComponent,
    PpDiscountCardInputComponent,
    SubscriptionPricingCardComponent,
    UserBirthDateComponent,
    UserFirstNameInputComponent,
    UserLastNameInputComponent,
    PersonTypeSelectorComponent,
    UserFullnameComponent
  ]
})
export class FieldsModule { }
