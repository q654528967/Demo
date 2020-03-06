import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo04DorComponent } from './demo04-dor.component';

describe('Demo04DorComponent', () => {
  let component: Demo04DorComponent;
  let fixture: ComponentFixture<Demo04DorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo04DorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo04DorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
