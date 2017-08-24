import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-booking-step-2',
  template: `    
    <app-booking-preview
      [booking]="booking"
      [pickUpLocation]="pickUpLocation"
      [rate]="rate"
      [activity]="activity"
    >
    </app-booking-preview>

    <div class="row">
      <div class="col-12 text-center">
        <button md-raised-button 
                [disabled]="loading"
                (click)="bookNow()"
                class="button-success w-100 py-2 mt-3" type="button">
          <span *ngIf="loading"><i class="fa fa-spinner fa-spin"></i> </span>
          Book&nbsp;now&nbsp;and&nbsp;save <app-total-saving
          [rate]="rate"
          [amountOfKids]="booking.kidsAmount"
          [amountOfAdults]="adultsAmount">
        </app-total-saving>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .button-success {
        color: white;
        background-color: green;
        font-size: 1.6em;
      }
      
      @media (max-width: 767px) {
        .button-success {
          font-size: 1.1em;
        }
      }
      `
  ]
})
export class BookingStep2Component implements OnInit {
  @Input() booking;
  @Input() departures;
  @Input() rate;
  @Input() activity;
  @Input() loading;
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  constructor() { }

  get pickUpLocation() {
    let _location;
    this.departures.some((pickUpLocation) => {
      if (pickUpLocation.id === this.booking.pickUpLocationId) {
        _location = pickUpLocation;
        return pickUpLocation.id === this.booking.pickUpLocationId
      }
    });
    return _location;
  }

  get adultsAmount() {
    return this.booking.adultsAmount + 1;
  }

  bookNow(){
    this.onSuccess.emit(this.booking);
  }

  ngOnInit() {
  }

}
