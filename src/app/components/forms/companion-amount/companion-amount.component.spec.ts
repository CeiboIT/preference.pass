import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionAmountComponent } from './companion-amount.component';

describe('CompanionAmountComponent', () => {
  let component: CompanionAmountComponent;
  let fixture: ComponentFixture<CompanionAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
