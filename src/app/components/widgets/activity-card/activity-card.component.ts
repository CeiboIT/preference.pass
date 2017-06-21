import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-card',
  template: `
    <div>
      activity card
    </div>
  `
})
export class ActivityCardComponent implements OnInit {
  @Input() activity;
  constructor() { }

  ngOnInit() {
  }

}
