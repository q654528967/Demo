import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-demo13-lianxi',
  templateUrl: './demo13-lianxi.component.html',
  styleUrls: ['./demo13-lianxi.component.css']
})
export class Demo13LianxiComponent implements OnInit {
  h1:any
  constructor( private myHttp:HttpClient) { }

  ngOnInit() {
  }
  loadMoer(){
    var url="http://localhost:8080/product/detail?lid=1";
    this.myHttp.get(url).subscribe((res)=>{
      this.h1=JSON.stringify(res.details.title)
    })
  }
}
