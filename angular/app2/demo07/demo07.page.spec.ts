import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo07Page } from './demo07.page';

describe('Demo07Page', () => {
  let component: Demo07Page;
  let fixture: ComponentFixture<Demo07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo07Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
