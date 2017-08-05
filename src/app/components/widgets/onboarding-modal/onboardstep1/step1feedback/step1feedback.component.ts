import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CardValidationResponse} from '../../../../../models/subscription';

@Component({
  selector: 'app-step1feedback',
  template: `
    <div>
      <h2>Feedback</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step1feedbackComponent implements OnInit {
  @Input() feedback: CardValidationResponse;
  constructor() { }

  ngOnInit() {
  }

}
