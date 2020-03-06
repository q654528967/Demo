import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo12Tab3Page } from './demo12-tab3.page';

describe('Demo12Tab3Page', () => {
  let component: Demo12Tab3Page;
  let fixture: ComponentFixture<Demo12Tab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12Tab3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo12Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
