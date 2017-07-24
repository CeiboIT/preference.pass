import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDeparturesComponent } from './activity-departures.component';

describe('ActivityDeparturesComponent', () => {
  let component: ActivityDeparturesComponent;
  let fixture: ComponentFixture<ActivityDeparturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDeparturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDeparturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
