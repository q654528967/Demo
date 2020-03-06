import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo12Tab2Page } from './demo12-tab2.page';

describe('Demo12Tab2Page', () => {
  let component: Demo12Tab2Page;
  let fixture: ComponentFixture<Demo12Tab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12Tab2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo12Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
