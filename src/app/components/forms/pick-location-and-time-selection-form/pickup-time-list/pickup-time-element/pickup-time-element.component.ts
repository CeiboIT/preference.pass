import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-pickup-time-element',
  template: `
    <md-card
      [ngClass]="{'active': selectedTime === time }"
      (click)="onSelected()" class="row text-center">
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
  @Input() selectedTime;
  @Output() onTimeSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() { }

  onSelected() {
    this.onTimeSelected.emit(this.time);
  }
}
