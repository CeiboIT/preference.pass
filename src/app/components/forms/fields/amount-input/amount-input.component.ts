import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-amount-input',
  template: `
    <div [formGroup]="parent">
      <button md-icon-button color="primary" type="button" (click)="clickOnRemove.emit()">
        <md-icon>
          remove
        </md-icon>
      </button>
      <md-input-container>
        <input mdInput type="number" [placeholder]="placeholder" value="0" [formControlName]="parentKey">
      </md-input-container>
      <button md-icon-button type="button" color="primary" (click)="clickOnAdd.emit()">
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
  @Input() minAmount = 0;
  @Input() maxAmount;
  clickOnRemove: EventEmitter<any> = new EventEmitter();
  clickOnAdd: EventEmitter<any> = new EventEmitter();
  private changesObservable: Observable<any>;
  constructor() { }
  ngOnInit() {
    let _validators = [];
    if (this.minAmount) {
      _validators.push(Validators.min(this.minAmount));
    }
    if (this.maxAmount) {
      _validators.push(Validators.max(this.maxAmount));
    }
    this.parent.get(this.parentKey).setValidators(_validators);
    this.changesObservable = this.parent.get(this.parentKey).valueChanges;
    this.changesObservable.subscribe((change) => {
      console.log(change);
      if (change < 0) {
        this.parent.get(this.parentKey).setValue(0);
      }
    });

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
