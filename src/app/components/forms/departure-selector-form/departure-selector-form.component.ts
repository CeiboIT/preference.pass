import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-departure-selector-form',
  template: `
    <div>
      <div>
        <h2>
          Departure selector
        </h2>  
      </div>
      
      <div>
        
        {{ departures |json }}
        
      </div>
    </div>
  `
})
export class DepartureSelectorFormComponent implements OnInit {
  @Input() departures;
  constructor() { }

  ngOnInit() {
  }

}
