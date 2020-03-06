import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo05ListPageRoutingModule } from './demo05-list-routing.module';

import { Demo05ListPage } from './demo05-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo05ListPageRoutingModule
  ],
  declarations: [Demo05ListPage]
})
export class Demo05ListPageModule {}
