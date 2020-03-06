import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo12TabsPageRoutingModule } from './demo12-tabs-routing.module';

import { Demo12TabsPage } from './demo12-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo12TabsPageRoutingModule
  ],
  declarations: [Demo12TabsPage]
})
export class Demo12TabsPageModule {}
