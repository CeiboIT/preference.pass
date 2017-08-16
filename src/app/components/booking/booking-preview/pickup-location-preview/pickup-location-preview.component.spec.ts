import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupLocationPreviewComponent } from './pickup-location-preview.component';

describe('PickupLocationPreviewComponent', () => {
  let component: PickupLocationPreviewComponent;
  let fixture: ComponentFixture<PickupLocationPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupLocationPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupLocationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
