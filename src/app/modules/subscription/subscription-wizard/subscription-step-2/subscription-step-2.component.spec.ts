import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionStep2Component } from './subscription-step-2.component';

describe('SubscriptionStep2Component', () => {
  let component: SubscriptionStep2Component;
  let fixture: ComponentFixture<SubscriptionStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
