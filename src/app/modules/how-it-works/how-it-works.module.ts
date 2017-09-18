import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./how-it-works.routes";
import { HowItWorksComponent } from "./how-it-works.component";

@NgModule({
    imports: [ 
        CommonModule,
        routing
    ],
    declarations: [ HowItWorksComponent ],
    exports: [ HowItWorksComponent ]
})
export class HowItWorksModule {}