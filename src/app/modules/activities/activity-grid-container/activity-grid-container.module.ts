import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./activity-grid-container.routes";
import { ActivityGridContainerComponent } from "./activity-grid-container.component";
import { ActivityGridModule } from "../../../components/activities/activity-grid/activity-grid.module";

@NgModule({
    imports: [ 
        CommonModule,
        routing,
        ActivityGridModule
    ],
    declarations: [ ActivityGridContainerComponent ],
    exports: [ ActivityGridContainerComponent ],
})
export class ActivityGridContainerModule { }