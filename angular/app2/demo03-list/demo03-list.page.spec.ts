import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo03ListPage } from './demo03-list.page';

describe('Demo03ListPage', () => {
  let component: Demo03ListPage;
  let fixture: ComponentFixture<Demo03ListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo03ListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo03ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
