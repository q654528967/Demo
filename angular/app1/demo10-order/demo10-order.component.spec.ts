import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10OrderComponent } from './demo10-order.component';

describe('Demo10OrderComponent', () => {
  let component: Demo10OrderComponent;
  let fixture: ComponentFixture<Demo10OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10OrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
