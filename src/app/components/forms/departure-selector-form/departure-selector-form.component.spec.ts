import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureSelectorFormComponent } from './departure-selector-form.component';

describe('DepartureSelectorFormComponent', () => {
  let component: DepartureSelectorFormComponent;
  let fixture: ComponentFixture<DepartureSelectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureSelectorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartureSelectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
