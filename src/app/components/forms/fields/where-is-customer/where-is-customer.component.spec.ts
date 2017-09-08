import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereIsCustomerComponent } from './where-is-customer.component';

describe('WhereIsCustomerComponent', () => {
  let component: WhereIsCustomerComponent;
  let fixture: ComponentFixture<WhereIsCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereIsCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereIsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
