import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo12TabsPage } from './demo12-tabs.page';

describe('Demo12TabsPage', () => {
  let component: Demo12TabsPage;
  let fixture: ComponentFixture<Demo12TabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12TabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo12TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
