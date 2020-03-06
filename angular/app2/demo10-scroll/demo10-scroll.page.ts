import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-demo10-scroll',
  templateUrl: './demo10-scroll.page.html',
  styleUrls: ['./demo10-scroll.page.scss'],
})
export class Demo10ScrollPage implements OnInit {
  
  constructor( private myAlert:AlertController) { }

  ngOnInit() {
  }
  onClick(){
    this.myAlert.create({})
  }
}
