import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo07PageRoutingModule } from './demo07-routing.module';

import { Demo07Page } from './demo07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo07PageRoutingModule
  ],
  declarations: [Demo07Page],
  
})
export class Demo07PageModule {}
