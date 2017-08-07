import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboardstep2Component } from './onboardstep2.component';

describe('Onboardstep2Component', () => {
  let component: Onboardstep2Component;
  let fixture: ComponentFixture<Onboardstep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboardstep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboardstep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
