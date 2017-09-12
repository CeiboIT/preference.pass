import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';
import { FinishBookingSuccessfulComponent } from "./finish-booking-successful.component";
import { SuccessAnimationModule } from '../../../components/widgets/alert/success-animation/success-animation.module';

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule,
        MdButtonModule,
        SuccessAnimationModule
    ],
    declarations: [ FinishBookingSuccessfulComponent ],
    exports: [ FinishBookingSuccessfulComponent ]
})
export class FinishBookingSuccessfulModule {}