import { CommonModule } from '@angular/common';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { PaymentFormComponent } from './payment-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        MdButtonModule, 
        MdInputModule,
        ReactiveFormsModule,
    ],
    declarations: [
      PaymentFormComponent
    ],
    exports: [
        PaymentFormComponent
    ]
})
export class PaymentsComponentsModule { }
