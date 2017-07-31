import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFullnameComponent } from './user-fullname.component';

describe('UserFullnameComponent', () => {
  let component: UserFullnameComponent;
  let fixture: ComponentFixture<UserFullnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFullnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFullnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
