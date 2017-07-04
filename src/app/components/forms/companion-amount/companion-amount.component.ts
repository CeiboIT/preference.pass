import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companion-amount',
  template: `
    <div>
      <app-kids-amount-input [parent]="parent"></app-kids-amount-input>
    </div>
  `
})
export class CompanionAmountComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
