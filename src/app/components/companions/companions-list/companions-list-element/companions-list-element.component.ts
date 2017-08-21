import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-companions-list-element',
  template: `
    <md-card>
      <md-card-content>
        <span>
          {{ companion.fullName }}
        </span>
        <span>
          {{companion.email}}
        </span>
      </md-card-content>
    </md-card>
  `
})
export class CompanionsListElementComponent implements OnInit {
  @Input() companion;
  constructor() { }

  ngOnInit() {
  }

}
