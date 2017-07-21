import { Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pick-location-and-time-selection-form',
  template: `
    <div>
      <h1>Select your departure location</h1>


    </div>
  `,
})
export class PickLocationAndTimeSelectionFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() departures = [];
  constructor() { }

  ngOnInit() {
  }

}
