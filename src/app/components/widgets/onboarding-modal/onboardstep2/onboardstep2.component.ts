import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-onboardstep2',
  template: `
    <app-subscription-wizard>
      
    </app-subscription-wizard>
  `
})
export class Onboardstep2Component implements OnInit {
  @Output() back: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
