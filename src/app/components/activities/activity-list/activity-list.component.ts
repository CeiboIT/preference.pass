import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-activity-list',
  template: `
      
    <!--<div class="scrolling-wrapper-flexbox hidden-md-up">
      <div class="activities-landing-container col-11" *ngFor="let activity of activities">
        <app-activity-card [activity]="activity"></app-activity-card>
      </div>
    </div>
    <div class="scrolling-wrapper-flexbox hidden-md-down">
      <div class="activities-landing-container col-3" *ngFor="let activity of activities">
        <app-activity-card [activity]="activity"></app-activity-card>
      </div>
    </div>-->

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


  `,
  styleUrls: ['./activity-list.component.scss']
})

export class ActivityListComponent implements OnInit {
  @Input() activities;
  @Input() isHotDeal;
  constructor() { }

  ngOnInit() { }

    public config: SwiperConfigInterface = {
        pagination: null,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                width: 300,
                freeMode: true,
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
  };
}

