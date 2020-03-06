import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo05ListPage } from './demo05-list.page';

describe('Demo05ListPage', () => {
  let component: Demo05ListPage;
  let fixture: ComponentFixture<Demo05ListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo05ListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo05ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
