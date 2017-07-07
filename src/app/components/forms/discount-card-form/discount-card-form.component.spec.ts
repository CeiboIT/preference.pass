import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCardFormComponent } from './discount-card-form.component';

describe('DiscountCardFormComponent', () => {
  let component: DiscountCardFormComponent;
  let fixture: ComponentFixture<DiscountCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
