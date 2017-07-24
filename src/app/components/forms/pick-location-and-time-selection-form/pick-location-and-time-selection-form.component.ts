import { Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pick-location-and-time-selection-form',
  template: `
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
    </div>
  `,
})
export class PickLocationAndTimeSelectionFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() departures = [];
  departuresCtrl: FormControl;
  filteredDepartures: any;

  constructor() {
    this.departuresCtrl = new FormControl();
    this.filteredDepartures = this.departuresCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterDepartures(name));
  }

  ngOnInit() {
  }
  selectionChanged(departure) {
    console.log(departure);
  }

  filterDepartures(val: string) {
    return val ? this.departures.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.departures;
  }


}
