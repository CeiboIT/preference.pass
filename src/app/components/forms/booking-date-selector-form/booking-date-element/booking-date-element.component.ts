import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-booking-date-element',
  template: `
    <md-card (click)="daySelected()" class="row text-center">
      <md-card-content>
        <h3 class="col-12">
          {{ weekDay }}
        </h3>
        <h1 class="col-12">
          {{ dayNumber }}
        </h1>
        <h2 class="col-12">
          {{ month }}
        </h2>  
      </md-card-content>
    </md-card>
  `
})
export class BookingDateElementComponent implements OnInit {
  @Input() day;
  @Output() onDaySelected: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() { }

  daySelected() {
    this.onDaySelected.emit(this.day);
  }

  get month(){
    return this.day.format('MMMM');
  }

  get weekDay(){
    return this.day.format('dddd');
  }

  get dayNumber() {
    return this.day.format('DD');
  }
}
