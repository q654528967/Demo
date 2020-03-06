import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo10ScrollPageRoutingModule } from './demo10-scroll-routing.module';

import { Demo10ScrollPage } from './demo10-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo10ScrollPageRoutingModule
  ],
  declarations: [Demo10ScrollPage]
})
export class Demo10ScrollPageModule {}
