import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companions-amount-container',
  template: `    
    <div>
      <h2>
        Companion Container
      </h2>
      <app-companion-amount [parent]="parent">
        
      </app-companion-amount>
    </div>
  `
})
export class CompanionsAmountContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
