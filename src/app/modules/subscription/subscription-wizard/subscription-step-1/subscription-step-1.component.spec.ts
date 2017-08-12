import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionStep1Component } from './subscription-step-1.component';

describe('SubscriptionStep1Component', () => {
  let component: SubscriptionStep1Component;
  let fixture: ComponentFixture<SubscriptionStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
