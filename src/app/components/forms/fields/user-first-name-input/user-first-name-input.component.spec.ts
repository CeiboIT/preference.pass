import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFirstNameInputComponent } from './user-first-name-input.component';

describe('UserFirstNameInputComponent', () => {
  let component: UserFirstNameInputComponent;
  let fixture: ComponentFixture<UserFirstNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFirstNameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFirstNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
