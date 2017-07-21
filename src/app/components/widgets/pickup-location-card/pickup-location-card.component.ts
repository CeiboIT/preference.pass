import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pickup-location-card',
  template: `
    <md-card>
      <img md-card-image [src]="mainPhoto">
      <md-card-content>
        {{ location.name }}
      </md-card-content>
    </md-card>
  `
})
export class PickupLocationCardComponent implements OnInit {
  @Input() location;
  constructor() { }

  ngOnInit() {
  }

  get mainPhoto() {
    console.log(this.location.mainPhoto);
    return this.location.mainPhoto[0].url;
  }
}
