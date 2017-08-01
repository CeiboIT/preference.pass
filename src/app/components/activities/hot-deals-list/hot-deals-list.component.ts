import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-hot-deals-list',
  template: `
    <div [swiper]="config" class="swiper-container" *ngIf="hotDeals.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" *ngFor="let hotDeal of hotDeals">
          <app-hot-deal-card [hotDeal]="hotDeal"></app-hot-deal-card>
        </div>
      </div>
      <!-- Controls -->
      <div [hidden]="config.scrollbar != '.swiper-scrollbar'" class="swiper-scrollbar"></div>
      <div [hidden]="config.pagination != '.swiper-pagination'" class="swiper-pagination"></div>
      <!-- Arrows -->
      <div [hidden]="config.nextButton != '.swiper-button-next'" class="swiper-button-next"></div>
      <div [hidden]="config.prevButton != '.swiper-button-prev'" class="swiper-button-prev"></div>
    </div>
  `,
  styleUrls: ['./hot-deals-list.scss']
})

export class HotDealsListComponent implements OnInit {
  @Input() hotDeals;
  constructor() { }

  ngOnInit() { }

  public config: SwiperConfigInterface = {
        pagination: null,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 16,
        slidesPerView: 6,
         breakpoints: {
            1024: {
                //slidesPerView: 4,
                slidesPerView: 'auto',
                spaceBetween: 16
            },
            768: {
                //slidesPerView: 3,
                slidesPerView: 'auto',
                spaceBetween: 16
            },
            767: {
                //slidesPerView: 2,
                slidesPerView: 'auto',
                spaceBetween: 12
            },
            480: {
              //slidesPerView: 1,
              slidesPerView: 'auto',
              spaceBetween: 12,
            }
      }
  };
}

