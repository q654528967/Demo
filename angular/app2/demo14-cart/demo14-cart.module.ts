import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo14CartPageRoutingModule } from './demo14-cart-routing.module';

import { Demo14CartPage } from './demo14-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo14CartPageRoutingModule
  ],
  declarations: [Demo14CartPage]
})
export class Demo14CartPageModule {}
