import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { HotDealsListComponent } from './hot-deals-list.component';
import { HotDealCardModule} from '../../widgets/hot-deal-card/hot-deal-card.module';
import { HotDealsCardLoaderModule } from '../../loaders/hot-deals-card-loader/hot-deals-card-loader.module'
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HotDealCardModule,
    HotDealsCardLoaderModule,
    SwiperModule
  ],
  declarations: [HotDealsListComponent],
  exports: [HotDealsListComponent]
})
export class HotDealsListModule { }
