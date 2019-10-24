import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownDeckComponent } from './deck.component';

describe('ShownDeckComponent', () => {
  let component: ShownDeckComponent;
  let fixture: ComponentFixture<ShownDeckComponent>;

  beforeEach(async(() => {
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
