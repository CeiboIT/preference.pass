import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Rate } from '../../../../models/rate';

@Component({
  selector: 'app-rate',
  template: `
    <md-card class="mb-3">
      <h2>{{ rate.name }}  </h2>
      <h3>
        {{ rate.currency }}&nbsp;{{ rate.discountPrice }}&nbsp;
      </h3>
      <h4><span class="discount-color">You save {{ totalDiscount }} </span></h4>
      <md-card-content>
        <div [froalaView]="rate.amenitiesDescription"></div>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="accent" (click)="book()" ><span class="text-white">Book now</span></button>
      </md-card-actions>
    </md-card>
  `,
  styles: [ '.discount-color { color: red}']
})
export class RateComponent implements OnInit {
  @Input() rate: Rate;
  @Output() rateSelected: EventEmitter<any> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() { }
  
  book() {
    this.rateSelected.emit(this.rate);
  }

  get totalDiscount() {
    return this.rate.currency + ' ' + ( this.rate.originalPrice - this.rate.discountPrice ) ;
  }
}
