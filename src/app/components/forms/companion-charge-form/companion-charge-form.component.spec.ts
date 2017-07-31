import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionChargeFormComponent } from './companion-charge-form.component';

describe('CompanionChargeFormComponent', () => {
  let component: CompanionChargeFormComponent;
  let fixture: ComponentFixture<CompanionChargeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionChargeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionChargeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
