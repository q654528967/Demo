import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo12Tab1Page } from './demo12-tab1.page';

describe('Demo12Tab1Page', () => {
  let component: Demo12Tab1Page;
  let fixture: ComponentFixture<Demo12Tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12Tab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo12Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
