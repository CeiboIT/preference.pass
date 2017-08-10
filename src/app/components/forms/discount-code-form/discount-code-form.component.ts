import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-discount-code-form',
  template: `
    <form name="discountCodeForm" [formGroup]="parent">
      <app-discount-code-input [parent]="parent"></app-discount-code-input>
    </form>
  `
})
export class DiscountCodeFormComponent implements OnInit {
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
