import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPricingFormComponent } from './subscription-pricing-form.component';

describe('SubscriptionPricingFormComponent', () => {
  let component: SubscriptionPricingFormComponent;
  let fixture: ComponentFixture<SubscriptionPricingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPricingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPricingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
