import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companion-charge-form',
  template: `
    <form [formGroup]="parent" (ngSubmit)="onSubmitForm($event)">
      <app-person-type-selector [parent]="parent"></app-person-type-selector>   
      <app-user-fullname [parent]="parent"></app-user-fullname>
      <app-email-input [parent]="parent"></app-email-input>
      <button md-raised-button color="accent" type="submit">
        Add
      </button>
    </form>
  `
})
export class CompanionChargeFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() adultsLimitReached;
  @Input() kidsLimitReached;
  @Output() onCompanionSubmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onSubmitForm($event) {
    $event.preventDefault();
    this.onCompanionSubmit.emit(this.parent.value);
    console.log(this.parent.value);
    this.parent.reset();
  }

  ngOnInit() {
  }

}
