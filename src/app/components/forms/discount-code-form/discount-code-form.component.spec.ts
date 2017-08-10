import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCodeFormComponent } from './discount-code-form.component';

describe('DiscountCodeFormComponent', () => {
  let component: DiscountCodeFormComponent;
  let fixture: ComponentFixture<DiscountCodeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCodeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
