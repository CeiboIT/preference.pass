import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-companions-list',
  template: `
    <div>
      <app-companions-list-element [companion]="companion" 
                                   *ngFor="let companion of companions">
      </app-companions-list-element>
    </div>
  `
})
export class CompanionsListComponent implements OnInit {
  @Input() companions;
  @Input() subscription;
  constructor() { }

  ngOnInit() {
  }

}
