import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessAnimationComponent } from "./success-animation.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ SuccessAnimationComponent ],
    exports: [ SuccessAnimationComponent ]
})
export class SuccessAnimationModule {}