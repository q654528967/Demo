import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-demo16-detail',
  templateUrl: './demo16-detail.component.html',
  styleUrls: ['./demo16-detail.component.css']
})
export class Demo16DetailComponent implements OnInit {

  constructor(private myrouter:ActivatedRoute) { }

  ngOnInit() {
    this.myrouter.params.subscribe(res=>{
      console.log(res.lid)
    })
  }

}
