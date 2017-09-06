import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pp-card-display',
  template: `
    <div>
      
    </div>
  `
})
export class PpCardDisplayComponent implements OnInit {
  @Input() ppCard;
  constructor() { }

  ngOnInit() {
  }

}
