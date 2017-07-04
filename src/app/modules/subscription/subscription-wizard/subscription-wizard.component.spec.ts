import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionWizardComponent } from './subscription-wizard.component';

describe('SubscriptionWizardComponent', () => {
  let component: SubscriptionWizardComponent;
  let fixture: ComponentFixture<SubscriptionWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
