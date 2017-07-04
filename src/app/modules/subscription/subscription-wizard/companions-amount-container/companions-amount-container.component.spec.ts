import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionsAmountContainerComponent } from './companions-amount-container.component';

describe('CompanionsAmountContainerComponent', () => {
  let component: CompanionsAmountContainerComponent;
  let fixture: ComponentFixture<CompanionsAmountContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionsAmountContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionsAmountContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
