import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSelectComponent } from './date-select.component';

describe('DateSelectComponent', () => {
  let component: DateSelectComponent;
  let fixture: ComponentFixture<DateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
