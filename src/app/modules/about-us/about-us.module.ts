import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './about-us.routes';
import { AboutUsComponent } from "./about-us.component";

@NgModule({
    imports: [ 
        CommonModule,
        routing
    ],
    declarations: [ AboutUsComponent ],
    exports: [ AboutUsComponent ]
})
export class AboutUsModule {}