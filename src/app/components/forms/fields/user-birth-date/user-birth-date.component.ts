import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-birth-date',
  template: `
<p>Basofia</p>
  `
})
export class UserBirthDateComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() showAs: String = 'calendar';
  constructor() { }

  ngOnInit() {
  }

}
