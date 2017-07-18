import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-booking-date-element',
  template: `
    <md-card (click)="daySelected()">
      {{ formattedDay }}
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

  get formattedDay() {
    return this.day.format('dd MMMM');
  }
}
