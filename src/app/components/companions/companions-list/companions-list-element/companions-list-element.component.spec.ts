import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionsListElementComponent } from './companions-list-element.component';

describe('CompanionsListElementComponent', () => {
  let component: CompanionsListElementComponent;
  let fixture: ComponentFixture<CompanionsListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionsListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
