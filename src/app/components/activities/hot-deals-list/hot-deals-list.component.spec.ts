import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDealsListComponent } from './hot-deals-list.component';

describe('HotDealsListComponent', () => {
  let component: HotDealsListComponent;
  let fixture: ComponentFixture<HotDealsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotDealsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
