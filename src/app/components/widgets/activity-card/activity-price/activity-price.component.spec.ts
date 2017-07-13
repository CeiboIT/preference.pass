import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPriceComponent } from './activity-price.component';

describe('ActivityPriceComponent', () => {
  let component: ActivityPriceComponent;
  let fixture: ComponentFixture<ActivityPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
