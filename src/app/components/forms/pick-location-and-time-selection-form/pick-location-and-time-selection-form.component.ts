import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

const timeRegexp = /^([01]\d|2[0-3]):?([0-5]\d)$/;
function generateDepartureTimes(departures) {
 let _times = [];
  departures.forEach((departure) => {
    departure.times.forEach((time) => {
      if (timeRegexp.test(time)) {
        console.log('Entered with: ', time);
        _times.push(time);
      }
    });
  });
  return _times.filter((value, index, self) => self.indexOf(value) === index);
}


@Component({
  selector: 'app-pick-location-and-time-selection-form',
  template: `
    <div>
      <div>
        <h1>Select your departure location</h1>
        <md-input-container>
          <input mdInput placeholder="Departure location" [mdAutocomplete]="auto" [formControl]="departuresCtrl">
        </md-input-container>
        <md-autocomplete #auto="mdAutocomplete">
          <md-option *ngFor="let departure of filteredDepartures | async" [value]="departure.name"
                     (onSelectionChange)="selectionChanged(departure)">
            {{ departure.name }}
          </md-option>
        </md-autocomplete>
        <div>
          <h1>
            Select departure time
          </h1>
          <app-pickup-time-element [time]="time" *ngFor="let time of times"
            (onTimeSelected)="onTimeSelected($event)"
          ></app-pickup-time-element>
        </div>
        
      </div>
    </div>
  `,
})
export class PickLocationAndTimeSelectionFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() departures = [];
  @Output() pickUpLocationSelected: EventEmitter<any> = new EventEmitter();
  @Output() pickUpTimeSelected: EventEmitter<any> = new EventEmitter();
  public times;
  departuresCtrl: FormControl;
  filteredDepartures: any;

  constructor() {
    this.departuresCtrl = new FormControl();
    this.filteredDepartures = this.departuresCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterDepartures(name));
  }

  ngOnInit() { }
  selectionChanged(departure) {
    console.log(departure);
    this.pickUpLocationSelected.emit(departure);
    this.parent.get('pickUpLocationId').setValue(departure.id);
    this.times = generateDepartureTimes(departure.departures);
  }

  onTimeSelected($event) {
    console.log($event);
    this.parent.get('pickUpTime').setValue($event);
    this.pickUpTimeSelected.emit($event);
  }

  filterDepartures(val: string) {
    return val ? this.departures.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.departures;
  }


}
