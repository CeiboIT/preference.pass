import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-preference-pass-card-form',
  template: `    
    <form [formGroup]="parent" novalidate>
      <app-preference-pass-card-input [parent]="parent"></app-preference-pass-card-input>
    </form>
  `
})
export class PreferencePassCardFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() onValid: EventEmitter<any> = new EventEmitter();
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

}
