import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityGridComponent } from "./activity-grid.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ActivityGridComponent ],
    exports: [ ActivityGridComponent ],
})
export class ActivityGridModule {}