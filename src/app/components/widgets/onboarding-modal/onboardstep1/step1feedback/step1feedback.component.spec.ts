import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1feedbackComponent } from './step1feedback.component';

describe('Step1feedbackComponent', () => {
  let component: Step1feedbackComponent;
  let fixture: ComponentFixture<Step1feedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1feedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1feedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
