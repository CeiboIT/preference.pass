import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupTimeElementComponent } from './pickup-time-element.component';

describe('PickupTimeElementComponent', () => {
  let component: PickupTimeElementComponent;
  let fixture: ComponentFixture<PickupTimeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupTimeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupTimeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
