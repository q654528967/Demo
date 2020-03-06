import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo12-tab2',
  templateUrl: './demo12-tab2.page.html',
  styleUrls: ['./demo12-tab2.page.scss'],
})
export class Demo12Tab2Page implements OnInit {

  constructor(private nav:NavController,private route:ActivatedRoute) { 
    const params = this.route.snapshot.params;
      console.log(params.id);
  }

  ngOnInit() {
  }
  onClick(){
    console.log(this.nav)
  }
}
