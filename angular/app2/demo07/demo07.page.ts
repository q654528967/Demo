import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.page.html',
  styleUrls: ['./demo07.page.scss'],
})
export class Demo07Page implements OnInit {

  constructor(private route: ActivatedRoute) { 
    const params = this.route.snapshot.params;
      console.log(params.id);
  }

  ngOnInit() {
  }
  slideOpts = {
    autoplay:{
      delay: 2000
 },
    effect:'cube',
    autoHeight:true,
    autoplayDisableOnInteraction:false
  };
}
