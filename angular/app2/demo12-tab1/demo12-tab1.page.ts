import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Demo06GridPageModule } from '../demo06-grid/demo06-grid.module';

@Component({
  selector: 'app-demo12-tab1',
  templateUrl: './demo12-tab1.page.html',
  styleUrls: ['./demo12-tab1.page.scss'],
})
export class Demo12Tab1Page implements OnInit {
  detail='12'
  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  onClick(){
    this.nav.navigateForward('')
  }
}
