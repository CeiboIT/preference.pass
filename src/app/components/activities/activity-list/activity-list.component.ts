import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-activity-list',
  template: `
    <div [swiper]="config" class="swiper-container" *ngIf="activities.length">
      <div class="swiper-wrapper">
          <div *ngFor="let activity of activities" class="swiper-slide">
            <!--<app-activity-card [activity]="activity"></app-activity-card>-->
              <div class="timeline-wrapper">
                <div class="timeline-item">
                    <div class="animated-background img"></div>
                    <div class="my-3 w-100 d-flex">
                      <div class="animated-background title w-75 mr-5"></div>
                      <div class="animated-background price w-25"></div>
                    </div>
                    <div class="animated-background description mb-1"></div>
                    <div class="animated-background description w-75"></div>
                </div>
            </div>


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

