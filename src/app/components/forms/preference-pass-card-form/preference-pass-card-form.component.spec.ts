import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencePassCardFormComponent } from './preference-pass-card-form.component';

describe('PreferencePassCardFormComponent', () => {
  let component: PreferencePassCardFormComponent;
  let fixture: ComponentFixture<PreferencePassCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencePassCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencePassCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
