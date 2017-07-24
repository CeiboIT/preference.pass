import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupLocationCardComponent } from './pickup-location-card.component';

describe('PickupLocationCardComponent', () => {
  let component: PickupLocationCardComponent;
  let fixture: ComponentFixture<PickupLocationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupLocationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupLocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
