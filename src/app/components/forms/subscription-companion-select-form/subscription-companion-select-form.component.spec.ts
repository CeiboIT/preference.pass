import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCompanionSelectFormComponent } from './subscription-companion-select-form.component';

describe('SubscriptionCompanionSelectFormComponent', () => {
  let component: SubscriptionCompanionSelectFormComponent;
  let fixture: ComponentFixture<SubscriptionCompanionSelectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionCompanionSelectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCompanionSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
