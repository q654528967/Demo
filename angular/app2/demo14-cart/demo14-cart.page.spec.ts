import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Demo14CartPage } from './demo14-cart.page';

describe('Demo14CartPage', () => {
  let component: Demo14CartPage;
  let fixture: ComponentFixture<Demo14CartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14CartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Demo14CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
