import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTypeSelectorComponent } from './person-type-selector.component';

describe('PersonTypeSelectorComponent', () => {
  let component: PersonTypeSelectorComponent;
  let fixture: ComponentFixture<PersonTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
