import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Price } from '../../../../models/subscription';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-card',
  template:  `    
    <md-card [ngClass]="{'active': parentValue === price.id }">
        <div class="mat-card-image">
          {{days}}
        </div>
      <md-card-content>
        <div>
          <div>
            <div class="price"><sup> {{ price.currency }}</sup>{{ price.adultPrice }}<sub>/adult</sub></div>
          </div>
          <div>
            <div class="price"><sup> {{ price.currency }}</sup>{{ price.kidPrice }}<sub>/kid</sub></div>
          </div>
        </div>

      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" (click)="select(price)">
          Select
        </button>
      </md-card-actions>
  
    </md-card>
  `,
  styles: [
    `
      /*md-card.active {
        border: 1px solid #03a9f4;
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
      }*/

      .mat-card-image {
        background: #03a9f4;
        font-size: 1.8rem;
        line-height: 4rem;
        color: #fff;
        font-weight: 300;
        text-align: center;
      }

      .mat-card-actions {
        border-top: 1px solid rgba(160,160,160,0.2);
        padding: 10px 0;
        text-align: center;
      }

      .price {
        position: relative;
        font-size: 1.4rem;
        line-height: 1.6em;
        padding: 10px 0px;
        text-align: center;
      }

      sup {
        font-weight: 300;
        font-size: .8rem;
        line-height: 1.6em;
        top: -7px;
        margin-right: 2px;
      }

      sub {
        font-weight: 300;
        font-size: .8rem;
        line-height: 1.6em;
        top: 0;
        margin-left: 2px;
      }
    `
  ]
})
export class SubscriptionPricingCardComponent implements OnInit {
  @Input() price: Price;
  @Input() parent: FormGroup;
  @Output() onCardSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }
  
  ngOnInit() { }

  get days(){
    if (this.price.days === 1) {
      return this.price.days + ' day';
    } else {
      return this.price.days + ' days';
    }
  }

  get parentValue() {
    return this.parent.get('plan').value;
  }

  select(price){
    this.onCardSelected.emit(price);
  }
}
