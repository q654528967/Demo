import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13LianxiComponent } from './demo13-lianxi.component';

describe('Demo13LianxiComponent', () => {
  let component: Demo13LianxiComponent;
  let fixture: ComponentFixture<Demo13LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
