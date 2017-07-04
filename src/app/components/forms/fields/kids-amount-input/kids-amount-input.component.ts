import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-kids-amount-input',
  template: `
    <div class="row">
      <button md-icon-button color="primary">
        <md-icon>
          remove
        </md-icon>
      </button>
      <md-input-container>
        <input mdInput placeholder="Kids" value="0" formControlName="kidsAmount">
      </md-input-container>
      <button md-icon-button color="primary">
        <md-icon>
          add
        </md-icon>
      </button>
    </div>
  `
})
export class KidsAmountInputComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() { }

}
