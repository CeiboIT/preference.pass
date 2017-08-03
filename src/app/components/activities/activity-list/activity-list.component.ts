import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-activity-list',
  template: `
    <div [swiper]="config" class="swiper-container" *ngIf="activities.length">
      <div class="swiper-wrapper">
          <div *ngFor="let activity of activities" class="swiper-slide">
            <app-activity-card [activity]="activity"></app-activity-card>
          </div>
        </div>
        <!-- Controls -->
        <div [hidden]="config.scrollbar != '.swiper-scrollbar'" class="swiper-scrollbar"></div>
        <div [hidden]="config.pagination != '.swiper-pagination'" class="swiper-pagination"></div>
        <!-- Arrows -->
        <div [hidden]="config.nextButton != '.swiper-button-next'" class="swiper-button-next"></div>
        <div [hidden]="config.prevButton != '.swiper-button-prev'" class="swiper-button-prev"></div>
    </div>

    <div [swiper]="config" class="swiper-container" *ngIf="!activities.length">
      <div class="swiper-wrapper">
          <div *ngFor="let item of items" class="swiper-slide">
            <activity-card-loader></activity-card-loader>  
          </div>
        </div>
    </div>  


  `,
  styleUrls: ['./activity-list.component.scss']
})

export class ActivityListComponent implements OnInit {
  @Input() activities;
  @Input() isHotDeal;
  public items;
  constructor() { 
    this.items = Array(5).fill(0).map((x,i)=>i);
  }

  ngOnInit() { }

    public config: SwiperConfigInterface = {
        pagination: null,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        slidesPerView: 5,
         breakpoints: {
            1024: {
                //slidesPerView: 4,
                slidesPerView: 'auto',
                spaceBetween: 40
            },
            768: {
                //slidesPerView: 3,
                slidesPerView: 'auto',
                spaceBetween: 30
            },
            767: {
                //slidesPerView: 2,
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            480: {
              //slidesPerView: 1,
              slidesPerView: 'auto',
              spaceBetween: 10,
            }
      }
  };
}

