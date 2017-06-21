import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesListContainerComponent } from './activities-list-container.component';

describe('ActivitiesListContainerComponent', () => {
  let component: ActivitiesListContainerComponent;
  let fixture: ComponentFixture<ActivitiesListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
