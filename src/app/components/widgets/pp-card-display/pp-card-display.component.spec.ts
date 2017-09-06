import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpCardDisplayComponent } from './pp-card-display.component';

describe('PpCardDisplayComponent', () => {
  let component: PpCardDisplayComponent;
  let fixture: ComponentFixture<PpCardDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpCardDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
