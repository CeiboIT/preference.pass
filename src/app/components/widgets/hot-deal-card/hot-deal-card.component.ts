import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-deal-card',
  template: `
    <div>
      
    </div>
  `
})
export class HotDealCardComponent implements OnInit {
  @Input() hotDeal
  constructor() { }

  ngOnInit() {
  }

}
