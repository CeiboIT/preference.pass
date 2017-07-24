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
    slidesPerView: 6,
    centeredSlides: false,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 5
      }
    }
  };


  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }
}

