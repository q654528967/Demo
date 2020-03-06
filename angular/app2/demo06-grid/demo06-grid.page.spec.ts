import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo06GridPage } from './demo06-grid.page';

describe('Demo06GridPage', () => {
  let component: Demo06GridPage;
  let fixture: ComponentFixture<Demo06GridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo06GridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo06GridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
