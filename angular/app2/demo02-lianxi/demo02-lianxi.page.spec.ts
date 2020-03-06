import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo02LianxiPage } from './demo02-lianxi.page';

describe('Demo02LianxiPage', () => {
  let component: Demo02LianxiPage;
  let fixture: ComponentFixture<Demo02LianxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo02LianxiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo02LianxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
