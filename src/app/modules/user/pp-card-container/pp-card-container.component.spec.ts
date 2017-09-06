import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpCardContainerComponent } from './pp-card-container.component';

describe('PpCardContainerComponent', () => {
  let component: PpCardContainerComponent;
  let fixture: ComponentFixture<PpCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
