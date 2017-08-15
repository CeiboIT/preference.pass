import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

const timeRegexp = /([01]\d|2[0-3]):?([0-5]\d)/;
function generateDepartureTimes(departures) {
 let _times = [];
  departures.forEach((departure) => {
    departure.times.forEach((time) => {
      console.log(time);
      if (timeRegexp.test(time)) {
        const _time = time.match(timeRegexp)[0];
        console.log('Entered with: ', _time);
        _times.push(_time);
      }
    });
  });
  const _filtered = _times.filter((value, index, self) => self.indexOf(value) === index);
  const _sorted = _filtered.sort((a, b) => {
    const _a = new Date('1970/01/01 ' + a).valueOf();
    const _b = new Date('1970/01/01 ' + b).valueOf();
    return _a - _b;
  });
  return _sorted;
}


@Component({
  selector: 'app-pick-location-and-time-selection-form',
  template: `
    <div class="row">
      <div class="col-12">
        <h2>Select your departure location</h2>
      </div>
      <div class="col-12">
        <md-input-container class="w-100">
          <input mdInput placeholder="Departure location" [mdAutocomplete]="auto" [formControl]="departuresCtrl">
        </md-input-container>
        <md-autocomplete #auto="mdAutocomplete">
          <md-option *ngFor="let departure of filteredDepartures | async" [value]="departure.name"
                     (onSelectionChange)="selectionChanged(departure)">
            {{ departure.name }}
          </md-option>
        </md-autocomplete>
      </div>
      <div class="col-12" *ngIf="times && times.length">
        <h2>
          Select departure time
        </h2>
        <div class="col-12">
          <app-pickup-time-list [times]="times"  
          (onTimeSelected)="onTimeSelected($event)">
          </app-pickup-time-list>
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
