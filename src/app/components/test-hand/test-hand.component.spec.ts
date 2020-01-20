import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHandComponent } from './test-hand.component';

describe('TestHandComponent', () => {
  let component: TestHandComponent;
  let fixture: ComponentFixture<TestHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
