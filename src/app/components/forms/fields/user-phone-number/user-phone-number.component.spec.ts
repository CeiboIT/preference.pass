import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhoneNumberComponent } from './user-phone-number.component';

describe('UserPhoneNumberComponent', () => {
  let component: UserPhoneNumberComponent;
  let fixture: ComponentFixture<UserPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
