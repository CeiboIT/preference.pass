import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { BecomeAMemberNowButtonComponent } from "./become-a-member-now-button.component";

@NgModule({
    imports: [ 
        CommonModule,
        MdButtonModule
    ],
    declarations: [ BecomeAMemberNowButtonComponent ],
    exports: [ BecomeAMemberNowButtonComponent ]
})
export class BecomeAMemberNowButtonModule {}