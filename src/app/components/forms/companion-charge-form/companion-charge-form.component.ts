import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-companion-charge-form',
  template: `    
    <form [formGroup]="newCompanion" (ngSubmit)="onSubmitForm($event)">
      <app-person-type-selector [parent]="newCompanion"></app-person-type-selector>   
      <app-user-fullname [parent]="newCompanion"></app-user-fullname>
      <app-email-input [parent]="newCompanion"></app-email-input>
      <button md-raised-button color="accent" type="submit">
        Add
      </button>
    </form>
  `
})
export class CompanionChargeFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() adultsLimitReached;
  @Input() kidsLimitReached;
  @Input() companionLoading;
  @Output() onCompanionSubmit: EventEmitter<any> = new EventEmitter();
  public newCompanion: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MdDialogRef<CompanionChargeFormComponent>) {
    this.newCompanion = fb.group({
      fullName: [''],
      email: [''],
      personType: ['Adult']
    });
  }

  /*onSubmitForm($event) {
    $event.preventDefault();
    this.onCompanionSubmit.emit(this.parent.value);
    console.log(this.parent.value);
    this.parent.reset();
  }*/

  onSubmitForm($event) {
      console.log($event);
      this.dialogRef.close(this.newCompanion.value);
  }


  ngOnInit() {
  }

}
