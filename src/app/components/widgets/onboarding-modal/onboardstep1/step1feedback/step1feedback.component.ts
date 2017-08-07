import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CardValidationResponse} from '../../../../../models/subscription';

@Component({
  selector: 'app-step1feedback',
  template: `
    <div class="text-danger">
      <p *ngIf="feedback?.invalid"> Card number not valid</p>
    </div>
  `
})
export class Step1feedbackComponent implements OnInit {
  @Input() feedback;
  constructor() { }

  ngOnInit() {
  }

}
