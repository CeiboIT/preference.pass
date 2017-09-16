import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Price } from '../../../../models/subscription';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-pricing-card',
  template:  `    
    <!--<md-card [ngClass]="{'active': parentValue === price.id }" (click)="select(price)">
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
        <button md-raised-button color="primary">
          Select
        </button>
      </md-card-actions>
  
    </md-card>-->

    <div class="card card-pricing text-center" [ngClass]="{'active': parentValue === price.id }" (click)="select(price)">
      <div class="card-block">
        <!--<h6 class="card-category">Category</h6>-->
        <h1 class="card-title">{{days}}</h1>
        <ul>
          <li><b>{{ price.currency }} {{ price.adultPrice }}</b> per adult</li>
          <li><b>{{ price.currency }} {{ price.kidPrice }}</b> per kid</li>
        </ul>
        <a class="btn btn-warning btn-round text-white">
          Select Plan
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./subscription-pricing-card.component.scss'],
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
