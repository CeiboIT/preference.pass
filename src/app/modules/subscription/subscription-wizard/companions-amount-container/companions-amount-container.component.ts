import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companions-amount-container',
  template: `    
    <div>
      <h2>
        How many companions are coming with you?    
      </h2>
      <app-companion-amount [parent]="parent"></app-companion-amount>
      
      <button>
        
      </button>
    </div>
  `
})
export class CompanionsAmountContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() successClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }



}
