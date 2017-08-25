import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from "@angular/material";
import { BookingDetailCardComponent } from "./booking-detail-card.component";

@NgModule({
    imports: [ 
        CommonModule,
        MdCardModule
    ],
    declarations: [ BookingDetailCardComponent ],
    exports: [ BookingDetailCardComponent ],
})
export class BookingDetailCardModule {}