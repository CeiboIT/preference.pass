import {Component, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-companions-form',
  template: `    
    <form action="" novalidate>
      <h2>Select companions</h2>
        <app-companion-charge-form [parent]="newCompanion">
          
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
  @Output() companionAdded;
  @Output() onCompanionSelectionSubmit;
  public newCompanion: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newCompanion = fb.group({
      fullName: [''],
      email: [''],
      personType: ['']
    });
  }
  ngOnInit() {
  }

}
