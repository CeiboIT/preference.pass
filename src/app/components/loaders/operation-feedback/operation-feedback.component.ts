import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-operation-feedback',
  template: `
    <div class="circle-loader">
      <div  class="checkmark error"></div>
    </div>
  `,
  styleUrls: ['./operation-feedback.component.scss']
})
export class OperationFeedbackComponent implements OnInit {
  @Input() loading: boolean;
  @Input() success: boolean;
  constructor() { }

  ngOnInit() {
  }

}
