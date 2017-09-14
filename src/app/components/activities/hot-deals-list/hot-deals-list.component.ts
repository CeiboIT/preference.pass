import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-hot-deals-list',
  template: `
  <div class="d-flex justify-content-between title mb-4">
    <h3 class="text-capitalize mb-0">        
      <i class="fa fa-free-code-camp text-danger"></i> Hot Deals
    </h3>

    <div class="see-more">
      <a [routerLink]="['/list', 'hot-deals']">
        See more
      </a>
      <svg aria-hidden="true" focusable="false" role="presentation" style="fill: currentcolor; height: 10px; width: 10px;" viewBox="0 0 18 18"><path _ngcontent-c5="" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z" fill-rule="evenodd"></path></svg>
    </div>
  </div>
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

    <div [swiper]="config" class="swiper-container" *ngIf="!hotDeals.length">
      <div class="swiper-wrapper">
          <div *ngFor="let item of items" class="swiper-slide">
            <hot-deals-card-loader></hot-deals-card-loader>  
          </div>
        </div>
    </div>  
  `,
  styleUrls: ['./hot-deals-list.scss']
})

export class HotDealsListComponent implements OnInit {
  @Input() hotDeals;
  public items;
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
  constructor() { 
    this.items = Array(this.config.slidesPerView).fill(0).map((x,i)=>i);
  }

  ngOnInit() { }
}

