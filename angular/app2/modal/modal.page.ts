import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './components/login/login.component';
import { Demo08WindowsPage } from '../demo08-windows/demo08-windows.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      showBackdrop:true,
      component: LoginComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
