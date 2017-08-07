import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboardstep1Component } from './onboardstep1.component';

describe('Onboardstep1Component', () => {
  let component: Onboardstep1Component;
  let fixture: ComponentFixture<Onboardstep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboardstep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboardstep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
