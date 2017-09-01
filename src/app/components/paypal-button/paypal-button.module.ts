import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalButtonComponent } from './paypal-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaypalButtonComponent],
  exports: [PaypalButtonComponent]
})
export class PaypalButtonModule { }
