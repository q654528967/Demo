import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo04PageRoutingModule } from './demo04-routing.module';

import { Demo04Page } from './demo04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo04PageRoutingModule
  ],
  declarations: [Demo04Page]
})
export class Demo04PageModule {}
