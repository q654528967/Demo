import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-demo11-cart',
  templateUrl: './demo11-cart.component.html',
  styleUrls: ['./demo11-cart.component.css']
})
export class Demo11CartComponent implements OnInit {
  arr:any
  lista:number=1
  constructor() { }

  ngOnInit() {
  }
  parent(msg){
    this.arr=msg
    console.log(msg)
  }
  change(){
    this.arr=Math.random()*10;
    this.lista=Math.random()*10;
  }
}
