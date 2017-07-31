import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companions-selection-form',
  template: `
    <app-companions-selector [parent]="parent" [companions]="companions"></app-companions-selector>
  `
})
export class CompanionsSelectionFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() companions;
  constructor() { }
  ngOnInit() { }
}
