import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo12Tab1PageRoutingModule } from './demo12-tab1-routing.module';

import { Demo12Tab1Page } from './demo12-tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo12Tab1PageRoutingModule
  ],
  declarations: [Demo12Tab1Page]
})
export class Demo12Tab1PageModule {}
