import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityGridContainerComponent } from "./activity-grid-container.component";
import { ActivityGridModule } from "../../../components/activities/activity-grid/activity-grid.module";

@NgModule({
    imports: [ 
        CommonModule,
        ActivityGridModule
    ],
    declarations: [ ActivityGridContainerComponent ],
    exports: [ ActivityGridContainerComponent ],
})
export class ActivityGridContainerModule { }