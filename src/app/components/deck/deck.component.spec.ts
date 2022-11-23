import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShownDeckComponent } from './deck.component';

describe('ShownDeckComponent', () => {
  let component: ShownDeckComponent;
  let fixture: ComponentFixture<ShownDeckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShownDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
