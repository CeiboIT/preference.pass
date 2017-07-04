import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsAmountInputComponent } from './kids-amount-input.component';

describe('KidsAmountInputComponent', () => {
  let component: KidsAmountInputComponent;
  let fixture: ComponentFixture<KidsAmountInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsAmountInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
