import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companions-selector',
  template: `
    <md-select placeholder="Select adults" [multiple]="true" (change)="onAdultSelected($event)" name="companionsSelect">
      <md-option *ngFor="let companion of adults" [value]="companion.id">
        {{companion.fullName}}
      </md-option>
    </md-select>

    <md-select placeholder="Select kids" [multiple]="true" (change)="onKidSelected($event)" name="companionsSelect">
      <md-option *ngFor="let companion of kids" [value]="companion.id">
        {{companion.fullName}}
      </md-option>
    </md-select>
  `
})
export class CompanionsSelectorComponent implements OnInit {
  @Input() companions;
  @Input() parent: FormGroup;
  public kids = [];
  public adults = [];
  public selectedCompanions = [];
  public selectedAdults = [];
  public selectedKids = [];

  constructor() { }
  ngOnInit() {
    this.kids = this.companions.filter((c) => c.type === 'Kid');
    this.adults = this.companions.filter((c) => c.type === 'Adult');
  }

  onKidSelected($event) {
    this.selectedKids = $event.value;
    this.setSelectedCompanions();
  }

  onAdultSelected($event) {
    this.selectedAdults = $event.value;
    this.setSelectedCompanions();
  }

  setSelectedCompanions() {
    this.selectedCompanions = this.selectedAdults.concat(this.selectedKids);
    this.parent.get('companionsIds').setValue(this.selectedCompanions);
  }
}
