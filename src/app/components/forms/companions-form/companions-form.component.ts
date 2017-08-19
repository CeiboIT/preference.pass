import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-companions-form',
  template: `    
    <form class="row" action="" novalidate>
      <h2>Select companions</h2>
        <div class="row">
          <h2 class="col-12">
            Add new companions
          </h2>
          <div class="col-12">
            <app-companion-charge-form
              *ngIf="!isLimitReached"
              [parent]="newCompanion"
              (onCompanionSubmit)="submitCompanion($event)"
            >
            </app-companion-charge-form>
          </div>
        </div>
      <div 
        class="row"
        *ngIf="previouslyChargedCompanions && previouslyChargedCompanions.length">
        <h2>
          Previously added companions
        </h2>
        <div class="col-12">
          <app-persons-list [list]="previouslyChargedCompanions"
                            [parent]="parent"
                            [entityKey]="entityKey"
                            *ngIf="!isLimitReached"
          >
          </app-persons-list>
        </div>
      </div>
      
      <div class="row">
        <h2 class="col-12">
          Added companions for this trip
        </h2>
        <div class="col-12">
          <app-persons-list
            [list]="subscriptionCompanions"
            [parent]="parent"
            [entityKey]="entityKey"
            *ngIf="!isLimitReached"
          >
          </app-persons-list>
        </div>
      </div>
      {{ subscription  | json }}
    </form>
  `
})
export class CompanionsFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() entityKey;
  @Input() subscription;
  @Input() previouslyChargedCompanions;
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

  get isLimitReached() {
    return false;
  }

  get subscriptionCompanions() {
    if ( this.subscription && this.subscription.companions ) {
      return this.subscription.companions;
    }
    return [];
  };

}
