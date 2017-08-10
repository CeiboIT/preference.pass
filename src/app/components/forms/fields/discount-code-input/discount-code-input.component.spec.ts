import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCodeInputComponent } from './discount-code-input.component';

describe('DiscountCodeInputComponent', () => {
  let component: DiscountCodeInputComponent;
  let fixture: ComponentFixture<DiscountCodeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCodeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
