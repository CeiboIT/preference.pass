import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCompanionSelectComponent } from './subscription-companion-select.component';

describe('SubscriptionCompanionSelectComponent', () => {
  let component: SubscriptionCompanionSelectComponent;
  let fixture: ComponentFixture<SubscriptionCompanionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionCompanionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCompanionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
