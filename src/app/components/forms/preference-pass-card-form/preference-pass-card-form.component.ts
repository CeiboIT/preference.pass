import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-preference-pass-card-form',
  template: `    
    <form [formGroup]="parent" novalidate>
      <app-preference-pass-card-input [parent]="parent"></app-preference-pass-card-input>
      <button md-raised-button color="primary" [disabled]="!parent.valid" (click)="onCardSubmit()">
        Validate card number
      </button>
      <button md-button color="primary" (click)="generateVirtualCard()">
        I do not have a card, generate one
      </button>
    </form>
  `
})
export class PreferencePassCardFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() onValid: EventEmitter<any> = new EventEmitter();
  @Output() onGenerateVirtualCard: EventEmitter<any> = new EventEmitter();
  validityObserver: Observable<any>;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.validityObserver = new Observable(observer => {
      this.parent.statusChanges.subscribe((status) => {
        if (status === 'VALID') {
          observer.next(this.parent.value);
        }
      });
    })

    this.validityObserver.subscribe((value) => {
      console.log(value);
      this.onValid.emit({value: value});
    });
  }

  onCardSubmit() {
    const _form = this.parent.value;
    this.onValid.emit({value: _form.code });
  }

  generateVirtualCard() {
    this.onGenerateVirtualCard.emit();
  }

}
