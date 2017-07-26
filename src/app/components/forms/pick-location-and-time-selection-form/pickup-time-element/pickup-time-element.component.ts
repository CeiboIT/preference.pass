import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-pickup-time-element',
  template: `
    <md-card (click)="selectedTime()" class="row text-center">
      <md-card-content>
        <h1 class="col-12">
          {{ time }}
        </h1>
      </md-card-content>
    </md-card>
  `
})
export class PickupTimeElementComponent implements OnInit {
  @Input() time;
  @Output() onTimeSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() { }
  selectedTime() {
    this.onTimeSelected.emit(this.time);
  }
}
