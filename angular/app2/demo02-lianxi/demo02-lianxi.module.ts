import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo02LianxiPageRoutingModule } from './demo02-lianxi-routing.module';

import { Demo02LianxiPage } from './demo02-lianxi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo02LianxiPageRoutingModule
  ],
  declarations: [Demo02LianxiPage]
})
export class Demo02LianxiPageModule {}
