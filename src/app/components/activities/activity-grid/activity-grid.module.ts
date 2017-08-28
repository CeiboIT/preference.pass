import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityGridComponent } from "./activity-grid.component";
import { ActivityCardModule } from "../../widgets/activity-card/activity-card.module";

@NgModule({
    imports: [ 
        CommonModule,
        ActivityCardModule
    ],
    declarations: [ ActivityGridComponent ],
    exports: [ ActivityGridComponent ],
})
export class ActivityGridModule {}