import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo12Tab2PageRoutingModule } from './demo12-tab2-routing.module';

import { Demo12Tab2Page } from './demo12-tab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo12Tab2PageRoutingModule
  ],
  declarations: [Demo12Tab2Page]
})
export class Demo12Tab2PageModule {}
