import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCompanionsFormComponent } from './subscription-companions-form.component';

describe('SubscriptionCompanionsFormComponent', () => {
  let component: SubscriptionCompanionsFormComponent;
  let fixture: ComponentFixture<SubscriptionCompanionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionCompanionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCompanionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
