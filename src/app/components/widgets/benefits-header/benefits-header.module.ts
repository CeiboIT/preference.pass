import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsHeaderComponent } from "./benefits-header.component";
import { BecomeAMemberNowButtonModule } from "../become-a-member-now-button/become-a-member-now-button.module";

@NgModule({
    imports: [ 
        CommonModule,
        BecomeAMemberNowButtonModule
    ],
    declarations: [ BenefitsHeaderComponent ],
    exports: [ BenefitsHeaderComponent ],
})
export class BenefitsHeaderModule {}