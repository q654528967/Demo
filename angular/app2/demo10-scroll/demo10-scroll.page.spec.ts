import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo10ScrollPage } from './demo10-scroll.page';

describe('Demo10ScrollPage', () => {
  let component: Demo10ScrollPage;
  let fixture: ComponentFixture<Demo10ScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10ScrollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo10ScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
