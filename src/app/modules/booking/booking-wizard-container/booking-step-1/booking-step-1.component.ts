import {Component, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {OutputDef} from "@angular/core/src/view";

const _today = moment();
const _inthreemonths = _today.clone();
_inthreemonths.add(3, 'months');

@Component({
  selector: 'app-booking-step-1',
  template: `
    <div class="row">
      <form class="col-8 offset-2" novalidate (ngSubmit)="onStep1Submit($event)">
        <div class="text-center">
          <h1 class="saving">
            {{ savingMessage }}
            <app-total-saving [rate]="rate" [amountOfKids]="kidsAmount" [amountOfAdults]="adultsAmount"></app-total-saving>
          </h1>
        </div>
        <md-card>
          <md-card-content>
            <h2>
              How many people is coming with you?
            </h2>
            <app-companion-amount [parent]="parent"></app-companion-amount>
          </md-card-content>
        </md-card>

        <md-card class="mt-3">
          <md-card-content>
            <h2>
              When do you wanna go to {{ activity?.name}}
            </h2>
            <app-date-select
              [parent]="parent"
              [parentKey]="'executionDate'"
              [years]="years"
              [initialDate]="today"
              [limitDate]="limitDate"
            >
            </app-date-select>
          </md-card-content>
        </md-card>

        <md-card class="mt-3">
          <md-card-content>
            <app-pick-location-and-time-selection-form *ngIf="departures?.length"
                                                       [parent]="parent"
                                                       [departures]="departures"
            >
            </app-pick-location-and-time-selection-form>
          </md-card-content>
        </md-card>


        <div class="row">
          <div class="col-12 text-center">
            <button md-raised-button class="button-success w-100 py-2 mt-3" type="submit">
              Book&nbsp;now&nbsp;and&nbsp;save <app-total-saving
              [rate]="rate"
              [amountOfKids]="kidsAmount"
              [amountOfAdults]="adultsAmount">

            </app-total-saving>

            </button>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .saving {
        color: green;
      }
      .button-success {
        color: white;
        background-color: green;
      }
    `
  ]
})
export class BookingStep1Component implements OnInit {
  @Input() parent: FormGroup;
  @Input() departures;
  @Input() rate;
  @Input() activity;
  @Output()

  public today = _today;
  public limitDate = _inthreemonths;

  constructor() { }

  ngOnInit() {
  }

  get savingMessage() {
    if (!this.parent.get('adultsAmount').value && !this.parent.get('kidsAmount').value)  {
      return 'Booking alone you are saving';
    } else {
      return 'Booking you are saving';
    }
  }


  get kidsAmount() {
    return this.parent.get('kidsAmount').value;
  }

  get adultsAmount() {
    return this.parent.get('adultsAmount').value +  1;
  }

  onStep1Submit() {

  }



  get years() {
    const actualYear = new Date().getFullYear();
    let _years = [actualYear];

    if (_inthreemonths.year() !== actualYear) {
      _years.push(_inthreemonths.year());
    }
    return _years;
  }

}
