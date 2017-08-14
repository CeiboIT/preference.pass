import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionsFormComponent } from './companions-form.component';

describe('CompanionsFormComponent', () => {
  let component: CompanionsFormComponent;
  let fixture: ComponentFixture<CompanionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
