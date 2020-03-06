import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo14SubmitPageRoutingModule } from './demo14-submit-routing.module';

import { Demo14SubmitPage } from './demo14-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo14SubmitPageRoutingModule
  ],
  declarations: [Demo14SubmitPage]
})
export class Demo14SubmitPageModule {}
