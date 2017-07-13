import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTitleComponent } from './activity-title.component';

describe('ActivityTitleComponent', () => {
  let component: ActivityTitleComponent;
  let fixture: ComponentFixture<ActivityTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
