import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityGridComponent } from "./activity-grid.component";
import { ActivityCardModule } from "../../widgets/activity-card/activity-card.module";
import { HotDealCardModule } from "../../widgets/hot-deal-card/hot-deal-card.module";
import { ActivityCardLoaderModule } from "../../loaders/activity-card-loader/activity-list.module";
import { HotDealsCardLoaderModule } from "../../loaders/hot-deals-card-loader/hot-deals-card-loader.module";

@NgModule({
    imports: [ 
        CommonModule,
        ActivityCardModule,
        HotDealCardModule,
        ActivityCardLoaderModule,
        HotDealsCardLoaderModule
    ],
    declarations: [ ActivityGridComponent ],
    exports: [ ActivityGridComponent ],
})
export class ActivityGridModule {}