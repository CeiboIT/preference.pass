import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDealCardComponent } from './hot-deal-card.component';

describe('HotDealCardComponent', () => {
  let component: HotDealCardComponent;
  let fixture: ComponentFixture<HotDealCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotDealCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDealCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
