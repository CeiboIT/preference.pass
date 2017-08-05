import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardValidationResponse} from '../../../../models/subscription';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-onboardstep1',
  template: `
    <div>
      <app-preference-pass-card-form [parent]="card" (onValid)="onCardFormValid($event)"></app-preference-pass-card-form>
      <app-step1feedback [feedback]="feedback"></app-step1feedback>
      <button md-raised-button color="primary">
        I don't have
      </button>
    </div>
  `
})
export class Onboardstep1Component implements OnInit {
  @Output() onValid: EventEmitter<any> = new EventEmitter();
  @Output() changeStep: EventEmitter<any> = new EventEmitter();
  @Input() feedback= {};
  public card: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.card = this.fb.group({
      code: ['']
    });
  }

  onCardFormValid($event) {
    console.log('Event in form', $event);
    const _code = $event.value.code;
    this.onValid.emit(_code);
  }

}
