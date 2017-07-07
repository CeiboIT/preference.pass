import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpDiscountCardInputComponent } from './pp-discount-card-input.component';

describe('PpDiscountCardInputComponent', () => {
  let component: PpDiscountCardInputComponent;
  let fixture: ComponentFixture<PpDiscountCardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpDiscountCardInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpDiscountCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
