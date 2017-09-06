import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pp-card-display',
  template: `
    <div class="panel">
      <div class="card card--front">
        <div class="card__number">{{ cardCode }}</div>
        <div class="card__expiry-date"></div>
        <div class="card__owner">{{ nameToDisplay }}</div>
        <img class="card__logo"
             style="width: 65px; height: 65px;"
             src="../../../../assets/imgs/PPLogo-circle_white.svg"/>
      </div>
    </div>
  `,
  styleUrls: ['pp-card-display.component.scss']
})
export class PpCardDisplayComponent implements OnInit {
  @Input() ppCard;
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

  get cardCode() {
    if (this.ppCard && this.ppCard.code) {
      const _code = this.ppCard.code;
      return _code.substring(0, 4) + ' ' + _code.substring(4, 8) + ' ' +  _code.substring(8, 12) + ' ' + _code.substring(12, 16);
    } else {
      return '';
    }
  }

  get nameToDisplay( ) {
    if (this.user.giveName && this.user.familyName) {
      return this.user.familyName + ' ' + this.user.givenName;
    } else {
      return this.user.name;
    }
  }

}
