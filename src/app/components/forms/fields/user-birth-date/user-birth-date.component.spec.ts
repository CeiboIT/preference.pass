import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBirthDateComponent } from './user-birth-date.component';

describe('UserBirthDateComponent', () => {
  let component: UserBirthDateComponent;
  let fixture: ComponentFixture<UserBirthDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBirthDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
