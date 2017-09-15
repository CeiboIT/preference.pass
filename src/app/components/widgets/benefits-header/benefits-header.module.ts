import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsHeaderComponent } from "./benefits-header.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ BenefitsHeaderComponent ],
    exports: [ BenefitsHeaderComponent ],
})
export class BenefitsHeaderModule {}