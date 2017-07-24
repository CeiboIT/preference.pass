import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-deal-card',
  template: `
    <!--<div>
      <div class="hot-deal-card-image hot-deal-card-image-background m-0 t-0"
           style="width: 100%; height: 100%;" [ngStyle]="{'background': 'url(' + image + ')'}"></div>
      <div>
        {{ title }}
      </div>
      <div>
        {{ headline }}
      </div>
      </div>-->
      <div class="mt-3 activity-card" (click)="gotoDetail()">
        <div class="activity-card-image m-0" [ngStyle]="{'background': 'url(' + image + ')'}"></div>
        <div class="my-3 activity-title d-flex justify-content-between">
            <div>
              {{ title }}
            </div>
        </div>
        <div class="activity-content">
          {{ headline }}
        </div>
      </div>
  `,
  styleUrls: ['./hot-deal-card.component.scss']
})
export class HotDealCardComponent implements OnInit {
  @Input() hotDeal;
  constructor() { }

  ngOnInit() {
  }

  get image (){
    let _img = '';
    if (this.hotDeal.mainPhoto) {
      _img = this.hotDeal.mainPhoto.url;
    } else {
      _img = this.hotDeal.activity.mainPhoto.url;
    }
    return _img;
  }

  get headline() {
    let _headline = '';
    if (this.hotDeal.headline) {
      _headline = this.hotDeal.headline;
    } else {
      _headline = this.hotDeal.activity.headline;
    }
    return _headline;
  }

  get title() {
    let _title = '';
    if (this.hotDeal.title) {
      _title = this.hotDeal.title;
    } else {
      _title = this.hotDeal.activity.name;
    }
    return _title;
  }
}
