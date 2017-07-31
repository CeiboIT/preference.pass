import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionsSelectorComponent } from './companions-selector.component';

describe('CompanionsSelectorComponent', () => {
  let component: CompanionsSelectorComponent;
  let fixture: ComponentFixture<CompanionsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
