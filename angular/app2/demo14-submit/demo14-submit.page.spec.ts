import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo14SubmitPage } from './demo14-submit.page';

describe('Demo14SubmitPage', () => {
  let component: Demo14SubmitPage;
  let fixture: ComponentFixture<Demo14SubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14SubmitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo14SubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
