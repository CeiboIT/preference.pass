import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotDealsListComponent } from './hot-deals-list.component';
import {HotDealCardModule} from '../../widgets/hot-deal-card/hot-deal-card.module';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HotDealCardModule,
    MdButtonModule,
    SwiperModule
  ],
  declarations: [HotDealsListComponent],
  exports: [HotDealsListComponent]
})
export class HotDealsListModule { }
