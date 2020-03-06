import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo14-submit',
  templateUrl: './demo14-submit.page.html',
  styleUrls: ['./demo14-submit.page.scss'],
})
export class Demo14SubmitPage implements OnInit {

  constructor(private active:ActivatedRoute) { 
    this.lod()
  }

  ngOnInit() {
  }
  lod(){
    this.active.queryParams.subscribe(res=>console.log(res))
  }
}
