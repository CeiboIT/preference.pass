import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPricingCardComponent } from './subscription-pricing-card.component';

describe('SubscriptionPricingCardComponent', () => {
  let component: SubscriptionPricingCardComponent;
  let fixture: ComponentFixture<SubscriptionPricingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPricingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPricingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
