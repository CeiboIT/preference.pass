import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { routing } from './terms-and-conditions.routes';
import { TermsAndConditionsComponent } from "./terms-and-conditions.component";

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule,
        routing
    ],
    declarations: [ TermsAndConditionsComponent ],
    exports: [ TermsAndConditionsComponent ]
})
export class TermsAndConditionsModule {}