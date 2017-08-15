import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupTimeListComponent } from './pickup-time-list.component';

describe('PickupTimeListComponent', () => {
  let component: PickupTimeListComponent;
  let fixture: ComponentFixture<PickupTimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupTimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
