import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-kids-amount-input',
  template: `
    <div class="row" [formGroup]="parent">
      <button md-icon-button color="primary" (click)="clickOnRemove.emit()">
        <md-icon>
          remove
        </md-icon>
      </button>
      <md-input-container>
        <input mdInput type="number" placeholder="Kids" value="0" formControlName="kidsAmount">
      </md-input-container>
      <button md-icon-button color="primary" (click)="clickOnAdd.emit()">
        <md-icon>
          add
        </md-icon>
      </button>
    </div>
  `
})
export class KidsAmountInputComponent implements OnInit {
  @Input() parent: FormGroup;
  clickOnRemove: EventEmitter<any> = new EventEmitter();
  clickOnAdd: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.clickOnAdd.subscribe(() => {
      const amount = this.parent.get('kidsAmount').value;
      if (amount) {
        const newAmount = amount + 1;
        this.parent.get('kidsAmount').setValue( newAmount);
      } else {
        this.parent.get('kidsAmount').setValue(1);
      }
    });
    this.clickOnRemove.subscribe(() => {
      const amount = this.parent.get('kidsAmount').value;
      if (amount) {
        const newAmount = amount - 1;
        this.parent.get('kidsAmount').setValue( newAmount);
      }
    });
  }

}
