import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo08WindowsPage } from './demo08-windows.page';

describe('Demo08WindowsPage', () => {
  let component: Demo08WindowsPage;
  let fixture: ComponentFixture<Demo08WindowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo08WindowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo08WindowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
