import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-deal-card',
  template: `
      <div class="mt-3 activity-card">
        <div class="activity-card-image m-0" [ngStyle]="{'background-image': 'url(' + image + ')'}"></div>
        <div class="my-3 activity-title d-flex justify-content-between">
            <div class="w-75">
              {{ title }}
            </div>
            <div class="w-25 text-right">
              <app-activity-price [rates]="hotDeal.rates"></app-activity-price>
              <div class="saving">
                <app-activity-saving [rates]="hotDeal.rates"></app-activity-saving>
              </div>
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
  constructor(){}

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
      _title = this.hotDeal.name;
    }
    return _title;
  }
}
