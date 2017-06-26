import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLastNameInputComponent } from './user-last-name-input.component';

describe('UserLastNameInputComponent', () => {
  let component: UserLastNameInputComponent;
  let fixture: ComponentFixture<UserLastNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLastNameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLastNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
