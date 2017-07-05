import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPricingContainerComponent } from './subscription-pricing-container.component';

describe('SubscriptionPricingContainerComponent', () => {
  let component: SubscriptionPricingContainerComponent;
  let fixture: ComponentFixture<SubscriptionPricingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPricingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPricingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
