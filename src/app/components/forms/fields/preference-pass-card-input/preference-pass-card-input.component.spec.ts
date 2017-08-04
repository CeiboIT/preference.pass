import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencePassCardInputComponent } from './preference-pass-card-input.component';

describe('PreferencePassCardInputComponent', () => {
  let component: PreferencePassCardInputComponent;
  let fixture: ComponentFixture<PreferencePassCardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencePassCardInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencePassCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
