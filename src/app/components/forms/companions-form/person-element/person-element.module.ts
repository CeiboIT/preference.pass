import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonElementComponent } from "./person-element.component";

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        PersonElementComponent
    ],
    exports: [
        PersonElementComponent
    ],
})
export class PersonElementModule {}