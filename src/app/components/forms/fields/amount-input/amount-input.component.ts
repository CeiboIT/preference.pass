import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-amount-input',
  template: `
    <div [formGroup]="parent">
      <button md-icon-button color="primary" (click)="clickOnRemove.emit()">
        <md-icon>
          remove
        </md-icon>
      </button>
      <md-input-container>
        <input mdInput type="number" [placeholder]="placeholder" value="0" [formControlName]="parentKey">
      </md-input-container>
      <button md-icon-button color="primary" (click)="clickOnAdd.emit()">
        <md-icon>
          add
        </md-icon>
      </button>
    </div>
  `
})
export class AmountInputComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() parentKey: string;
  @Input() placeholder: string;
  clickOnRemove: EventEmitter<any> = new EventEmitter();
  clickOnAdd: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.clickOnAdd.subscribe(() => {
      const amount = this.parent.get(this.parentKey).value;
      if (amount) {
        const newAmount = amount + 1;
        this.parent.get(this.parentKey).setValue( newAmount);
      } else {
        this.parent.get(this.parentKey).setValue(1);
      }
    });
    this.clickOnRemove.subscribe(() => {
      const amount = this.parent.get(this.parentKey).value;
      if (amount) {
        const newAmount = amount - 1;
        this.parent.get(this.parentKey).setValue( newAmount);
      }
    });
  }

}
