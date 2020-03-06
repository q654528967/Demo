import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Demo07PageModule } from '../demo07/demo07.module';
import { Demo07Page } from '../demo07/demo07.page';

@Component({
  selector: 'app-demo08-windows',
  templateUrl: './demo08-windows.page.html',
  styleUrls: ['./demo08-windows.page.scss'],
})
export class Demo08WindowsPage implements OnInit {

  constructor( public modalController: ModalController,public alertController: AlertController,public actionSheetController: ActionSheetController,public toastController: ToastController ,public loadingController: LoadingController) { }

  ngOnInit() {
  }
  async onClick(){
    let myLoading=await this.loadingController.create({
      message:"正在刷新",
      duration:3000
    })
    await myLoading.present()
  }
  async showToast(){
    let myToast=await this.toastController.create({
      message:"哈哈",
      duration:2000,
      showCloseButton:true,
      closeButtonText:'x'
    })
    await myToast.present()
  }
  async showActionSheet(){
    let actionSheet=await this.actionSheetController.create({
        header: '分享',
        buttons: [{
          text: '分享到qq',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: '分享到微信',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: '分享到微博',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  }
  async showAlert(){
    let alrt=await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alrt.present();
  
  }
}
