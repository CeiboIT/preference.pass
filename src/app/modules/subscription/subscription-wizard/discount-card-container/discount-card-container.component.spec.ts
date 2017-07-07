import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCardContainerComponent } from './discount-card-container.component';

describe('DiscountCardContainerComponent', () => {
  let component: DiscountCardContainerComponent;
  let fixture: ComponentFixture<DiscountCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
