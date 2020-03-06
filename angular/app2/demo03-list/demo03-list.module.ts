import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo03ListPageRoutingModule } from './demo03-list-routing.module';

import { Demo03ListPage } from './demo03-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo03ListPageRoutingModule
  ],
  declarations: [Demo03ListPage]
})
export class Demo03ListPageModule {}
