import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-companions-form',
  template: `    
    <form action="" novalidate>
      <h2>Select companions</h2>
        <app-companion-charge-form [parent]="newCompanion" (onCompanionSubmit)="submitCompanion($event)">
        </app-companion-charge-form>
        <app-persons-list [list]="availableCompanions"
          [parent]="parent"
          [entityKey]="entityKey"
        >
        </app-persons-list>
    </form>
  `
})
export class CompanionsFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() entityKey;
  @Input() availableCompanions;
  @Output() onAddCompanionSubmit: EventEmitter<any> = new EventEmitter();
  public newCompanion: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newCompanion = fb.group({
      fullName: [''],
      email: [''],
      personType: ['']
    });
  }

  submitCompanion($event) {
    console.log($event);
    this.onAddCompanionSubmit.emit($event);
  }
  ngOnInit() {
  }

}
