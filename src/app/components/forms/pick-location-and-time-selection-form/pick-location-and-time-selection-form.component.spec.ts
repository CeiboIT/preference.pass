import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickLocationAndTimeSelectionFormComponent } from './pick-location-and-time-selection-form.component';

describe('PickLocationAndTimeSelectionFormComponent', () => {
  let component: PickLocationAndTimeSelectionFormComponent;
  let fixture: ComponentFixture<PickLocationAndTimeSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickLocationAndTimeSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickLocationAndTimeSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
