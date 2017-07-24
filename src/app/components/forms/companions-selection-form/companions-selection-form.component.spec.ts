import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionsSelectionFormComponent } from './companions-selection-form.component';

describe('CompanionsSelectionFormComponent', () => {
  let component: CompanionsSelectionFormComponent;
  let fixture: ComponentFixture<CompanionsSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionsSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionsSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
