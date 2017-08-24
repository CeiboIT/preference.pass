import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionStartDateComponent } from './subscription-start-date.component';

describe('SubscriptionStartDateComponent', () => {
  let component: SubscriptionStartDateComponent;
  let fixture: ComponentFixture<SubscriptionStartDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionStartDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionStartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
