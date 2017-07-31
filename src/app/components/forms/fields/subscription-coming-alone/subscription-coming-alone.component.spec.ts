import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionComingAloneComponent } from './subscription-coming-alone.component';

describe('SubscriptionComingAloneComponent', () => {
  let component: SubscriptionComingAloneComponent;
  let fixture: ComponentFixture<SubscriptionComingAloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionComingAloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionComingAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
