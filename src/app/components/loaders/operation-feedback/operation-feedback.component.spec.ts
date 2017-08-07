import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationFeedbackComponent } from './operation-feedback.component';

describe('OperationFeedbackComponent', () => {
  let component: OperationFeedbackComponent;
  let fixture: ComponentFixture<OperationFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
