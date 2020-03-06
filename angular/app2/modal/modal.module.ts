import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { LoginComponent } from './components/login/login.component'
import { Demo08WindowsPage } from '../demo08-windows/demo08-windows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule
  ],
  declarations: [ModalPage,LoginComponent,Demo08WindowsPage],
  entryComponents:[LoginComponent,Demo08WindowsPage]
})
export class ModalPageModule {}
