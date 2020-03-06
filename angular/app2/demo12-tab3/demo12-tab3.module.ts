import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo12Tab3PageRoutingModule } from './demo12-tab3-routing.module';

import { Demo12Tab3Page } from './demo12-tab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo12Tab3PageRoutingModule
  ],
  declarations: [Demo12Tab3Page]
})
export class Demo12Tab3PageModule {}
