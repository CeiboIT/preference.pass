import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companions-selector',
  template: `
    <div>
      
      
      
    </div>
  `
})
export class CompanionsSelectorComponent implements OnInit {
  @Input() companions;
  @Input() parent: FormGroup;
  @Input() isActive = false;
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
