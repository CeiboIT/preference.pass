import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Price } from '../../../../models/subscription';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-card',
  template:  `    
    <md-card [ngClass]="{'active': parentValue === price.id }">
      <md-card-title>
        <h3 class="text-info">
          {{days}}
        </h3>
      </md-card-title>
      <md-card-content>
        <div class="row">
          <div class="col-12">
            <h2 class="col-12">
              {{ price.currency }} {{ price.adultPrice }}
            </h2>     
            <p>
              Per adult
            </p>
          </div>
          <div class="col-12">
            <h3 class="col-12">
              {{ price.currency }} {{ price.kidPrice }}
            </h3>
            <div class="col-12">
              Per kid
            </div>
          </div>
        </div>

      </md-card-content>
      <md-card-footer>
        <button md-raised-button color="primary" class="w-100" (click)="select(price)">
          Select
        </button>
      </md-card-footer>
  
    </md-card>
  `
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
