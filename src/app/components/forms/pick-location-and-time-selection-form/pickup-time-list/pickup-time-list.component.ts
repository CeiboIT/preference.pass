import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pickup-time-list',
  template: `    
    <div class="row">
      <app-pickup-time-element class="col-md-2 col-sm-6 mb-2 mr-3" *ngFor="let time of times"
        [time]="time"
        [selectedTime]="selectedTime"
        (onTimeSelected)="timeSelected($event)"
      >
      </app-pickup-time-element>
    </div>
  `
})
export class PickupTimeListComponent implements OnInit {
  @Input() times;
  public selectedTime;

  @Output() onTimeSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  timeSelected($event) {
    this.selectedTime = $event;
    this.onTimeSelected.emit($event);
  }

}
