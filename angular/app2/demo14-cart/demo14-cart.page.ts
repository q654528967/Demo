import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-demo14-cart',
  templateUrl: './demo14-cart.page.html',
  styleUrls: ['./demo14-cart.page.scss'],
})
export class Demo14CartPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  getSubmit(){
    this.nav.navigateForward(['/submit'],{
      queryParams:{
        price:11
      }
    })
  }
}
