import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as moment from 'moment';

const _today = moment();
const _inthreemonths = _today.clone();
_inthreemonths.add(3, 'months');

@Component({
  selector: 'app-booking-step-1',
  template: `
    <div class="row">
      <form class="col-12" novalidate (ngSubmit)="onStep1Submit($event)">
        <div class="text-center">
          <h1 class="saving">
            {{ savingMessage }}
            <app-total-saving [rate]="rate" [amountOfKids]="kidsAmount" [amountOfAdults]="adultsAmount"></app-total-saving>
          </h1>
        </div>
        <md-card>
          <md-card-content>
            <h2>
              How many people are coming with you?
            </h2>
            <app-companion-amount [parent]="parent"
              [kidsLimit]="subscription?.kids"
              [adultsLimit]="subscription?.adults"
            >
            </app-companion-amount>
          </md-card-content>
        </md-card>

        <md-card class="mt-3">
          <md-card-content>
            <h2 class="pb-2 pb-md-3">
              When do you want go to {{ activity?.name}}
            </h2>
            <app-date-select
              [parent]="parent"
              [parentKey]="'executionDate'"
              [years]="years"
              [initialDate]="today"
              [limitDate]="limitDate"
              [startDate]="today"
            >
            </app-date-select>
          </md-card-content>
        </md-card>
        <!--
        <md-card class="mt-3" *ngIf="departures?.length">
          <md-card-content>
            <app-pick-location-and-time-selection-form
                                                       [parent]="parent"
                                                       [departures]="departures"
            >
            </app-pick-location-and-time-selection-form>
          </md-card-content>
        </md-card>
        -->
        <div class="row">
          <div class="col-12 text-center">
            <button md-raised-button class="button-success w-100 py-2 mt-3" type="submit">
              Continue&nbsp;and&nbsp;save <app-total-saving
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
        font-size: 1.6em;
        background-color: green;
      }
      @media (max-width: 767px) {
        .button-success {
          font-size: 1.1em;
        }
      }
    `
  ]
})
export class BookingStep1Component implements OnInit {
  @Input() parent: FormGroup;
  @Input() departures;
  @Input() rate;
  @Input() activity;
  @Input() subscription;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

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

  onStep1Submit($event) {
    this.onSubmit.emit($event);
    document.body.scrollTop = 0;
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
