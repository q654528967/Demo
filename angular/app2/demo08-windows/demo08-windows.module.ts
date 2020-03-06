import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo08WindowsPageRoutingModule } from './demo08-windows-routing.module';

import { Demo08WindowsPage } from './demo08-windows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo08WindowsPageRoutingModule
  ],
  declarations: [Demo08WindowsPage],
})
export class Demo08WindowsPageModule {}
