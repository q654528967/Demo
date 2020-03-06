import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo04Page } from './demo04.page';

describe('Demo04Page', () => {
  let component: Demo04Page;
  let fixture: ComponentFixture<Demo04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo04Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
