import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo06ModleComponent } from './demo06-modle.component';

describe('Demo06ModleComponent', () => {
  let component: Demo06ModleComponent;
  let fixture: ComponentFixture<Demo06ModleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo06ModleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo06ModleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
