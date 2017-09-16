import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-activity-list',
  template: `
    <div class="d-flex justify-content-between title mb-4">
      <h3 class="text-capitalize mb-0">        
        {{ category }}
      </h3>

      <div class="see-more" *ngIf="!comingSoon">
        <a [routerLink]="['/list', category]">
          See more
        </a>
        <svg aria-hidden="true" focusable="false" role="presentation" style="fill: currentcolor; height: 10px; width: 10px;" 
             viewBox="0 0 18 18">
          <path
             d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z" 
               fill-rule="evenodd">
          </path>
        </svg>
      </div>
    </div>
    <div [swiper]="config" class="swiper-container" *ngIf="!comingSoon && activities.length">
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

    <div [swiper]="config" class="swiper-container" *ngIf="!comingSoon && !activities.length">
      <div class="swiper-wrapper">
          <div *ngFor="let item of items" class="swiper-slide">
            <activity-card-loader></activity-card-loader>  
          </div>
        </div>
    </div>
    
    <div *ngIf="comingSoon" class="text-center">
      <h1>
        Coming soon
      </h1>
    </div>
  `,
  styleUrls: ['./activity-list.component.scss']
})

export class ActivityListComponent implements OnInit {
  @Input() activities;
  @Input() category;
  @Input() comingSoon = false;
  public config: SwiperConfigInterface = {
    pagination: null,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 20,
    slidesPerView: 5,
     breakpoints: {
        1024: {
            slidesPerView: 4,
            //slidesPerView: 'auto',
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            //slidesPerView: 'auto',
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2,
            //slidesPerView: 'auto',
            spaceBetween: 20
        },
        480: {
         //slidesPerView: 1,
          slidesPerView: 'auto',
          spaceBetween: 10,
        }
    }
  };
  public items = Array(this.config.slidesPerView).fill(0).map((x,i)=>i);

  constructor() {

  }

  get categoryToNavigate() {
    let _category = this.category.toUpperCase();
    if (_category.indexOf(' ') !== -1) {
        const reg = new RegExp(' ', 'g');
        return _category.replace(reg, '');
    } else {
      return _category
    }
  }

  ngOnInit() {

  }


}

