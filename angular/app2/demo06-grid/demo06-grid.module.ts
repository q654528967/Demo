import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo06GridPageRoutingModule } from './demo06-grid-routing.module';

import { Demo06GridPage } from './demo06-grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo06GridPageRoutingModule
  ],
  declarations: [Demo06GridPage]
})
export class Demo06GridPageModule {}
